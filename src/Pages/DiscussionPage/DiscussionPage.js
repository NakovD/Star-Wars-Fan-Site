import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ForumBody from '../../Components/Forum/ForumBody.js';
import PostBody from '../../Components/Post/PostBody.js';
import ProfileInfo from '../../Components/Post/ProfileInfo.js';
import DiscussionContent from '../../Components/Post/DiscussionContent.js';
import CommentSection from '../../Components/Post/CommentSection.js';
import AddComment from '../../Components/Post/AddComment.js';
import EditDiv from '../../Components/Post/EditAndDeleteDiv.js';
import useFetchData from '../../utils/customHooks/customHooks.js';
import AuthContext from '../../Context.js';
import io from 'socket.io-client';


const DiscussionPage = () => {
    const authInfo = useContext(AuthContext);
    const { discussionId } = useParams();
    const [discussionDetails, changeDisc] = useState({
        creator: {
            side: ''
        }
    });
    const [comments, setComments] = useState([]);
    const [dataChange, setChange] = useState(false);

    useFetchData(`post/${discussionId}`, changeDisc, [dataChange]);
    useFetchData(`comments/${discussionId}`, setComments);

    useEffect(() => {
        const socket = io('http://localhost:3002');
        socket.emit('sendId', discussionId);
        socket.on('commented', data => {
            const check = data.some(el => el.discussion === discussionId);
            if (check) {
                setComments(data);
                return;
            }
        });
        console.log('executed');
        return () => socket.disconnect();
    });

    return (
        <ForumBody >
            <PostBody side={discussionDetails.creator.side}>
                <ProfileInfo {...discussionDetails.creator} />
                <DiscussionContent
                    userId={authInfo.userInfo.userId}
                    data={discussionDetails}
                    changeMethod={setChange} />
            </PostBody>
            {(authInfo.userInfo.userId === discussionDetails.creator._id) ? (<EditDiv userId={authInfo.userInfo.userId} discId={discussionDetails._id} />) : null}
            <CommentSection comments={comments} />
            <AddComment
                changeMethod={setChange}
                userId={authInfo.userInfo.userId}
            />
        </ForumBody>
    );
}

export default DiscussionPage;