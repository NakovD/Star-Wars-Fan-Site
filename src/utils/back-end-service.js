const apiKey = 'http://localhost:3001/api/';
export default {
    GET: async function (URL) {
        const response = await fetch(`${apiKey}${URL}`);
        const data = await response.json();
        return data;
    },
    POST: async function (URL, body) {
        const response = await fetch(`${apiKey}${URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
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