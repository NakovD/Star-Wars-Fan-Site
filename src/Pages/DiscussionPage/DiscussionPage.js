import React, { useState, useEffect } from 'react';
import ForumBody from '../../Components/Forum/ForumBody.js';
import PostBody from '../../Components/Post/PostBody.js';
import ProfileInfo from '../../Components/Post/ProfileInfo.js';
import DiscussionContent from '../../Components/Post/DiscussionContent.js';
import CommentSection from '../../Components/Post/CommentSection.js';
import Comment from '../../Components/Post/Comment.js';
import serverRequests from '../../utils/back-end-service.js';


// https://codepen.io/Codchunks/pen/NEzpZB for a comment text area, very simple and cool!
const DiscussionPage = (props) => {

    const [discussionDetails, changeDisc] = useState({
        creator: {
            side: ''
        }
    });
    const discussionId = props.match.params.id;

    useEffect(() => {
        const getDetails = async () => {
            const discInfo = await serverRequests.GET(`http://localhost:3001/api/post/${discussionId}`);
            changeDisc(discInfo);
        }
        getDetails();
    }, [discussionId]);

        console.log(discussionDetails);
    return (
        <ForumBody >
            <PostBody side={discussionDetails.creator.side}>
                <ProfileInfo {...discussionDetails.creator} />
                <DiscussionContent data={discussionDetails} />
            </PostBody>
            <CommentSection comments={discussionDetails.comments}>
                <Comment username="KIRO" commentText="HI SUCKA" />
                <Comment username="MIRO" commentText="Welcome in our home! we curse a lot here!" />
                <Comment username="Dido" commentText="Sorry, man, they are a little too much, welcome! We are really happy that you are here" />
                <Comment username="Dori" commentText="hi guys,nice to see you" />
            </CommentSection>
        </ForumBody>
    );
}

export default DiscussionPage;