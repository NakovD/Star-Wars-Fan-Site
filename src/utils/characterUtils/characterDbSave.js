import serverRequests from '../back-end-service.js';


const characterOperations = async (url, charInfo) => {
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


export default characterOperations;