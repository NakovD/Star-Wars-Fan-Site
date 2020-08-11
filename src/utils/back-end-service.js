const apiKey = 'http://localhost:3001/api/';

const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return cookieValue ? cookieValue[2] : null;
}

const getToken = () => {
    let token = '';
        if (document.cookie.includes('authToken')) {
            token = getCookie('authToken');
        } else if (document.cookie.includes('adminAuth')) {
            token = getCookie('adminAuth');
        }
        return token;
}

export default {
    GET: async function (URL) {
        const token = getToken();
        const response = await fetch(`${apiKey}${URL}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'auth': token
            }
        });
        const data = await response.json();
        return data;
    },
    POST: async function (URL, body) {
        const token = getToken();
        const response = await fetch(`${apiKey}${URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth': token
            },
            body: JSON.stringify(body)
        });
        return response;
    },
    DELETE: async function (URL, body) {
        const token = getToken();
        const response = await fetch(`${apiKey}${URL}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth': token
            },
            body: JSON.stringify(body)
        });
        return response;
    }
}