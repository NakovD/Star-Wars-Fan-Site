import serverRequests from '../back-end-service.js';


const charCreate_Update = async (url, charInfo) => {
    const createChar = await serverRequests.POST(url, charInfo);
    if (createChar.status !== 201 && createChar.status !== 200) {
        return {
            error: true,
            message: createChar.message
        }
    }
    return {
        error: false
    }
}

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


export {
    charCreate_Update,
    deleteChar
};