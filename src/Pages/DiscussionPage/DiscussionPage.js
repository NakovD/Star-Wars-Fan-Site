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
            const discInfo = await serverRequests.GET(`post/${discussionId}`);
            changeDisc(discInfo);
        }
        getDetails();
    }, [discussionDetails.comments, discussionId]);

    return (
        <ForumBody >
            <PostBody side={discussionDetails.creator.side}>
                <ProfileInfo {...discussionDetails.creator} />
                <DiscussionContent data={discussionDetails} />
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