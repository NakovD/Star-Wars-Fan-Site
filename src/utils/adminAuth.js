import serverRequests from './back-end-service.js';


const verifyAdmin = async (body) => {

    const fetch = await serverRequests.POST('admin/verify', body);
    if (fetch.status !== 200) {
        const obj = await fetch.json();
        return {
            error: true,
            message: obj.message
        }
    } else {
        const obj = await fetch.json();
        return {
            error: false,
            message: obj.message
        }
    }
}

const authenticate = async (reqBody, url) => {
    const auth = await serverRequests.POST(url, reqBody);
    if (auth.status === 200 || auth.status === 201) {
        const token = auth.headers.get('adminAuth');
        document.cookie = `adminAuth=${token}; path=/adminOnly`;
        const adminObj = await auth.json();
        return {
            error: false,
            userInfo: adminObj.userInfo
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

const verifyAdminLogin = async (typeToken) => {
    const token = getCookie(typeToken);
    if (!token) {
        return {
            error: true,
            message: 'No token'
        }
    }
    const verify = await serverRequests.POST('admin/verifyLogin', { token });
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

export {
    verifyAdmin,
    authenticate,
    verifyAdminLogin
}