import serverRequests from './back-end-service.js';


const authenticate = async (reqBody, url) => {
    const auth = await serverRequests.POST(url, reqBody);
    if (auth.status === 200 || auth.status === 201) {
        const token = auth.headers.get('authToken');
        document.cookie = `authToken=${token}; path=/`;
        const userObj = await auth.json();
        return {
            error: false,
            userInfo: userObj.userInfo
        }
    } else {
        const data = await auth.json();
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

const verifyUser = async (typeToken) => {
    const token = getCookie(typeToken);
    if (!token) {
        return {
            error: true,
            message: 'No token'
        }
    }
    const verify = await serverRequests.POST('verifyUser', { token });
    if (verify.status === 200) {
        const responseObj = await verify.json();
        return {
            error: false,
            userInfo: responseObj.userInfo
        }
    } else {
        return {
            error: true,
            message: verify.message
        }
    }
}

const fbAuthenticate = async (body) => {
    const authenticate = await serverRequests.POST('registerFbUser', body);
    if (authenticate.status === 201) {
        const token = authenticate.headers.get('authToken');
        document.cookie = `authToken=${token}; path=/`;
        const userObj = await authenticate.json();
        return {
            error: false,
            userInfo: userObj.userInfo
        }
    } else {
        const data = await authenticate.json();
        return {
            error: true,
            message: data.message
        }
    }

};

export {
    authenticate,
    verifyUser,
    fbAuthenticate
}