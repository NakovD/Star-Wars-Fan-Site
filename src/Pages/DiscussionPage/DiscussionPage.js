import React, { useState, useEffect, useContext } from 'react';
import ForumBody from '../../Components/Forum/ForumBody.js';
import PostBody from '../../Components/Post/PostBody.js';
import ProfileInfo from '../../Components/Post/ProfileInfo.js';
import DiscussionContent from '../../Components/Post/DiscussionContent.js';
import CommentSection from '../../Components/Post/CommentSection.js';
import Comment from '../../Components/Post/Comment.js';
import serverRequests from '../../utils/back-end-service.js';
import likePost from '../../utils/likePost.js';
import AuthContext from '../../Context.js';


// https://codepen.io/Codchunks/pen/NEzpZB for a comment text area, very simple and cool!
const DiscussionPage = (props) => {
    const authInfo = useContext(AuthContext);
    const [discussionDetails, changeDisc] = useState({
        creator: {
            side: ''
        }
    });
    const [liked, changeLiked] = useState(false);
    const discussionId = props.match.params.id;

    useEffect(() => {
        const getDetails = async () => {
            const discInfo = await serverRequests.GET(`post/${discussionId}`);
            changeDisc(discInfo);
            if (discInfo.usersLiked.includes(authInfo.userInfo.userId)) {
                changeLiked(true);
            }
        }
        getDetails();

    }, [discussionDetails.comments, authInfo.userInfo.userId, discussionId]);

    const likeHandler = async () => {
        if (discussionDetails.usersLiked.includes(authInfo.userInfo.userId)) {
            changeLiked(true);
        } else {
            const like = await likePost(authInfo.userInfo.userId, discussionDetails._id);
            return like;
        }
    }

    return (
        <ForumBody >
            <PostBody side={discussionDetails.creator.side}>
                <ProfileInfo {...discussionDetails.creator} />
                <DiscussionContent disabled={liked} onClick={e => likeHandler()} data={discussionDetails} />
            </PostBody>
            <CommentSection>
                {discussionDetails.comments ? discussionDetails.comments.map(comment => {
                    return (<Comment key={comment._id} {...comment} />)
                }) : null}
            </CommentSection>
        </ForumBody>
    );
}

export default DiscussionPage;