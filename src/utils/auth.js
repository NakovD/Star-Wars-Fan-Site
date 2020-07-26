import serverRequests from './back-end-service.js';

const register = async (authData) => {
    const reqBody = {
        username: authData.username,
        password: authData.password,
        repeatPassword: authData.repeatPassword,
        side: authData.side
    }
    const register = await serverRequests.POST('http://localhost:3001/api/register', reqBody);
    if (register.status === 201) {
        const token = register.headers.get('authToken');
        document.cookie = `authToken=${token}`;
        const responseObj = await register.json();
        return {
            error: false,
            userInfo: responseObj.userInfo
        }
    } else {
        const data = await register.json();
        return {
            error: true,
            message: data.message
        }
    }
}

const login = async (authData) => {
    const reqBody = {
        username: authData.username,
        password: authData.password
    }
    const loginUser = await serverRequests.POST('http://localhost:3001/api/login', reqBody);

    if (loginUser.status === 200) {
        const token = loginUser.headers.get('authToken');
        document.cookie = `authToken=${token}`;
        const responseObj = await loginUser.json();
        return {
            error: false,
            userInfo: responseObj.userInfo
        }
    } else {
        const data = await loginUser.json();
        return {
            error: true,
            message: data.message
        }
    }
}

const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return cookieValue ? cookieValue[2] : null;
}

const verifyUser = async () => {
    const token = getCookie('authToken');

    if (!token) {
        return {
            error: true,
            message: 'No token'
        }
    }
    const verify = await serverRequests.POST('http://localhost:3001/api/verifyUser', { token });
    if (verify.status === 200) {
        const responseObj = await verify.json();
        return {
            error: false,
            userInfo: responseObj.userInfo
        }
    } else {
        return {
            error: false,
            message: verify.message
        }
    }
}

export {
    register,
    login,
    verifyUser
}