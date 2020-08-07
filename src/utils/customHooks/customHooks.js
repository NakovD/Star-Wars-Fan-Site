import { useEffect } from 'react';
import serverRequests from '../back-end-service.js';


const useFetchData = async (url, changeMethod, whenToChangeStuff = []) => {

    useEffect(() => {
        const func = async () => {
            const data = await serverRequests.GET(url);
            changeMethod(data);
        }
        func();
        // eslint-disable-next-line
    }, [url, changeMethod, ...whenToChangeStuff]);
}

export default useFetchData;