import serverRequests from './back-end-service.js';


const likePost = async (userId, discussionId) => {
    const reqBody = {
        userId,
        discussionId
    };
    const response = await serverRequests.POST('likePost', reqBody);
    if (response.status === 200) {
        return {
            error: false
        }
    } else {
        const json = await response.json();
        return {
            error: true,
            message: json.message
        }
    }
}

export default likePost;