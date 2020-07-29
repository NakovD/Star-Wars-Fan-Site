import serverRequests from './back-end-service.js';


const addComment = async (commentBody, userId, discussionId) => {
    const reqBody = {
        creator: userId,
        commentContent: commentBody,
        discussion: discussionId
    };
    const addCommentInDb = await serverRequests.POST('addComment', reqBody);
    if (addCommentInDb.status !== 201) {
        const responseObj = await addCommentInDb.json();
        return {
            error: true,
            message: responseObj.message
        }
    }
    return {
        error: false,
    }
}

export default addComment;