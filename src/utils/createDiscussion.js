import serverRequests from './back-end-service.js';


const createDisc = async (discussion) => {
    //TO DO: GET THE USER ID FROM THE CONTEXT WHICH IS GONNA BE IMPLEMENTED LATER THIS MONTH! VERY IMPORTANT!
    const reqBody = {
        title: discussion.title,
        description: discussion.description,
        creator: '5f19582cde66ad1a747fdedf',
        likes: 0,
        comments: []
    }
    reqBody.createdAt = new Date().toString();
    const create = await serverRequests.POST('http://localhost:3001/api/createPost', reqBody);
    if (create.message !== 'Post created successfully!') {
        return {
            error: true,
            message: create.message
        }
    }
    return {
        error: false
    }
}


export default createDisc;