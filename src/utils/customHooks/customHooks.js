import { useEffect } from 'react';
import serverRequests from '../back-end-service.js';


const useFetchData = async (url, changeMethod) => {

    useEffect(() => {
        const func = async () => {
            const data = await serverRequests.GET(url);
            changeMethod(data);
        }
        func();
    }, [url, changeMethod]);
}

export default useFetchData;