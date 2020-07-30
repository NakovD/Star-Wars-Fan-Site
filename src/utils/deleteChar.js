import serverRequests from './back-end-service.js';


const deleteChar = async (charId) => {
    const reqBody = {
        id: charId
    };
    const delete_ = await serverRequests.DELETE('disapproveChar', reqBody);
    if (delete_.status !== 204) {
        const json = await delete_.json();
        return {
            error: true,
            message: json.message
        }
    }
    return {
        error: false
    }
}

export default deleteChar;