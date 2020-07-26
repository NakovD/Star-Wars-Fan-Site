import React, { useState, useEffect } from 'react';
import AuthContext from './Context.js';
import { verifyUser } from './utils/auth.js';

const App = (props) => {

    const [auth, changeAuth] = useState({
        loggedIn: null,
        userInfo: {
            _id: '',
            side: ''
        }
    });

    const logIn = (userInfo) => {
        changeAuth({
            loggedIn: true,
            userInfo
        });
    }

    const logOut = () => {
        document.cookie = "authToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; //TO DO, ADD COOKIE NAME FOR REGULAR USER AND FOR ADMIN;
        changeAuth({
            loggedIn: false,
            userInfo: {
                _id: '',
                side: ''
            }
        });
    }

    useEffect(() => {
        const serverOperation = async () => {
            const verify = await verifyUser();
            if (verify.error) {
                logOut();
                return;
            }
            logIn(verify.userInfo);

        }
        serverOperation();
    }, []);


    return (
        <AuthContext.Provider value={{
            loggedIn: auth.loggedIn,
            userInfo: auth.userInfo,
            logIn: logIn,
            logOut: logOut
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default App;