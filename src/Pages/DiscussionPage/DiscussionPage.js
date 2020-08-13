import React, { useState, useContext, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ForumBody from '../../Components/Forum/ForumBody.js';
import PostBody from '../../Components/Post/PostBody.js';
import ProfileInfo from '../../Components/Post/ProfileInfo.js';
import DiscussionContent from '../../Components/Post/DiscussionContent.js';
import CommentSection from '../../Components/Post/CommentSection.js';
import AddComment from '../../Components/Post/AddComment.js';
import EditDiv from '../../Components/Post/EditAndDeleteDiv.js';
import { useFetchData } from '../../utils/customHooks/customHooks.js';
import AuthContext from '../../Context.js';
import pagination from '../../utils/otherUtils/paginationAndSearch.js';
import serverRequests from '../../utils/back-end-service.js';
import io from 'socket.io-client';



const DiscussionPage = () => {
    const authInfo = useContext(AuthContext);
    const { discussionId } = useParams();
    const location = useLocation();
    const socketContainer = useRef(null);

    const [discussionDetails, changeDisc] = useState({
        creator: {
            side: ''
        }
    });
    const [comments, setComments] = useState([]);
    const [dataChange, setChange] = useState(false);
    const [pages, changePages] = useState(0);

    const page = pagination(location.search).page;

    useFetchData(`post/${discussionId}`, changeDisc, [dataChange]);

    // useEffect(() => {
    //     socketContainer.current = io('http://localhost:3002');
    //     socketContainer.current.emit('getId', { discussion: discussionId });
    //     return () => socketContainer.current.close();
    //     // eslint-disable-next-line
    // }, []);

    useEffect(() => {
        const getData = async () => {
            const allComments = await serverRequests.GET(`comments/${discussionId}?page=${page}`);
            setComments(allComments.comments);
            changePages(allComments.maxPages);
        }
        getData();
        // socketContainer.current.on('comments', (data) => {
        //     setChange(prev => !prev);
        // });
        // eslint-disable-next-line
    }, [page, discussionId, dataChange]);

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
                maxPages={pages}
                currentPage={page}
                changeMethod={setChange}
                userId={authInfo.userInfo.userId}
            />
        </ForumBody>
    );
}

export default DiscussionPage;