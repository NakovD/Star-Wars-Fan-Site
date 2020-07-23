import React from 'react';
import ForumBody from '../../Components/Forum/ForumBody.js';
import PostBody from '../../Components/Post/PostBody.js';
import ProfileInfo from '../../Components/Post/ProfileInfo.js';
import DiscussionContent from '../../Components/Post/DiscussionContent.js';
import CommentSection from '../../Components/Post/CommentSection.js';
import Comment from '../../Components/Post/Comment.js';


// https://codepen.io/Codchunks/pen/NEzpZB for a comment text area, very simple and cool!
const DiscussionPage = () => {
    // const darkSide = true;
    // const lightSide = true;
    return (
        <ForumBody >
            <PostBody >
                <ProfileInfo />
                <DiscussionContent />
            </PostBody>
            <CommentSection >
                <Comment username="KIRO" commentText="HI SUCKA" />
                <Comment username="MIRO" commentText="Welcome in our home! we curse a lot here!" />
                <Comment username="Dido" commentText="Sorry, man, they are a little too much, welcome! We are really happy that you are here" />
                <Comment username="Dori" commentText="hi guys,nice to see you" />
            </CommentSection>
        </ForumBody>
    );
}

export default DiscussionPage;