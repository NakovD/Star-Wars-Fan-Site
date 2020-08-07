const apiKey = 'http://localhost:3001/api/';
export default {
    GET: async function (URL, token) {
        const response = await fetch(`${apiKey}${URL}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Auth': token
            }
        });
        const data = await response.json();
        return data;
    },
    POST: async function (URL, body, token) {
        const response = await fetch(`${apiKey}${URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(body)
        });
        return response;
    },
    DELETE: async function (URL, body) {
        const response = await fetch(`${apiKey}${URL}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return response;
    }
}