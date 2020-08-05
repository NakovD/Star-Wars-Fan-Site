import serverRequests from '../back-end-service.js';


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

const editDisc = async (discussion, userId) => {
    const reqBody = {
        title: discussion.title,
        description: discussion.description,
        userId
    }
    const updateDisc = await serverRequests.POST(`editDisc/${discussion._id}`, reqBody);
    if (updateDisc.status !== 200) {
        const responseObj = await updateDisc.json();
        return {
            error: true,
            message: responseObj.message
        }
    }
    return {
        error: false
    }
}

const deleteDisc = async (discussionId, userId, history) => {
    const deleteDisc = await serverRequests.DELETE(`delete/${discussionId}`, { userId });
    if (deleteDisc.status !== 200) {
        const jsonBody = await deleteDisc.json();
        return {
            error: true,
            message: jsonBody.message
        }
    }
    history.push('/forum');
    return {
        error: false
    }
}


export {
    createDisc,
    editDisc,
    deleteDisc
};