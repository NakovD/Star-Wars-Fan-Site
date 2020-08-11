import { useEffect, useState } from 'react';
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

const useAuth = (authType) => {
    const [loginData, changeLoginData] = useState({
        username: '',
        usernameErr: '',
        password: '',
        passwordErr: '',
        submitErr: ''
    });

    const [registerData, changeRegisterData] = useState({
        username: '',
        usernameErr: false,
        password: '',
        passwordErr: false,
        repeatPassword: '',
        repeatPasswordErr: false,
        side: '',
        submitErr: ''
    });

    if (authType === 'login') {
        return [loginData, changeLoginData];
    } else if (authType === 'register') {
        return [registerData, changeRegisterData];
    }
}

const useDetails = () => {
    const [charDetails, changeDetails] = useState({
        name: '',
        era: '',
        factions: '',
        species: '',
        imgURL: '',
        description: '',
        err: false
    });
    return [charDetails, changeDetails];
}

export {
    useFetchData,
    useAuth,
    useDetails
};