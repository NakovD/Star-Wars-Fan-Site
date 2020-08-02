import React, { useState, useEffect, useContext } from 'react';
import ForumBody from '../../Components/Forum/ForumBody.js';
import PostBody from '../../Components/Post/PostBody.js';
import ProfileInfo from '../../Components/Post/ProfileInfo.js';
import DiscussionContent from '../../Components/Post/DiscussionContent.js';
import CommentSection from '../../Components/Post/CommentSection.js';
import serverRequests from '../../utils/back-end-service.js';
import likePost from '../../utils/likePost.js';
import addComment from '../../utils/addComment.js';
import AddComment from '../../Components/Post/AddComment.js';
import AuthContext from '../../Context.js';

const DiscussionPage = (props) => {
    const authInfo = useContext(AuthContext);
    const [discussionDetails, changeDisc] = useState({
        creator: {
            side: ''
        }
    });
    const [comments, setComments] = useState([]);
    const [liked, changeLiked] = useState(false);
    const discussionId = props.match.params.id;
    const [comment, setComment] = useState('');


    useEffect(() => {
        const getDetails = async () => {
            const discInfo = await serverRequests.GET(`post/${discussionId}`);
            const commentsData = await serverRequests.GET(`comments/${discussionId}`);
            changeDisc(discInfo);
            setComments(commentsData);
            if (discInfo.usersLiked.includes(authInfo.userInfo.userId)) {
                changeLiked(true);
            }
        }
        getDetails();
    }, [authInfo.userInfo.userId, discussionId]);

    const likeHandler = async () => {
        if (discussionDetails.usersLiked.includes(authInfo.userInfo.userId)) {
            changeLiked(true);
        } else {
            const like = await likePost(authInfo.userInfo.userId, discussionDetails._id);
            return like;
        }
    }

    const addCommentFunc = async () => {
        if (!comment) {
            return;
        }

        const addComment_ = await addComment(comment, authInfo.userInfo.userId, discussionId);
        if (addComment_.error) {
            alert(addComment_.message);
            return;
        }
        setComment('');
    }

    return (
        <ForumBody >
            <PostBody side={discussionDetails.creator.side}>
                <ProfileInfo {...discussionDetails.creator} />
                <DiscussionContent disabled={liked} onClick={e => likeHandler()} data={discussionDetails} />
            </PostBody>
            <CommentSection comments={comments} />
            <AddComment
                value={comment}
                onChange={e => setComment(e.target.value)}
                onClick={addCommentFunc}
            />
        </ForumBody>
    );
}

export default DiscussionPage;