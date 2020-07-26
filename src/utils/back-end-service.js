export default {
    GET: async function (URL) {
        const response = await fetch(URL);
        const data = await response.json();
        return data;
    },
    POST: async function (URL, body) {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        return response;
    }
}