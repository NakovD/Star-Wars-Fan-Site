import serverRequests from './back-end-service.js';
const register = async (authData) => {
    const reqBody = {
        username: authData.username,
        password: authData.password,
        repeatPassword: authData.repeatPassword,
        side: authData.side
    }
    const register = await serverRequests.POST('http://localhost:3001/api/register', reqBody);
    if (register.message === 'User registered successfully!') {
        return {
            error: false
        }
    }else {
        return {
            error: true,
            message: register.message
        }
    }
}


export {
    register
}