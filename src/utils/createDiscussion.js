import serverRequests from './back-end-service.js';


const createDisc = async (discussion, userId) => {
    const reqBody = {
        title: discussion.title,
        description: discussion.description,
        creator: userId,
        likes: 0,
        comments: []
    }
    reqBody.createdAt = new Date().toString();
    const create = await serverRequests.POST('createPost', reqBody);
    if (create.status !== 201) {
        const responseObj = await create.json();
        return {
            error: true,
            message: responseObj.message
        }
    }
    return {
        error: false
    }
}


export default createDisc;