import React, { useState, useEffect } from 'react';
import AuthContext from './Context.js';
import { verifyUser } from './utils/authenticationUtils/auth.js';
import { verifyAdminLogin } from './utils/authenticationUtils/adminAuth.js';
import fbConnect from './utils/fbUtils/fbConnect.js';

const App = (props) => {
    const [auth, changeAuth] = useState({
        loggedIn: null,
        adminVerify: false,
        userInfo: {
            _id: '',
            side: ''
        }
    });

    fbConnect();

    const logIn = (userInfo) => {
        if (userInfo.side === 'admin') {
            changeAuth({
                loggedIn: 'admin',
                userInfo
            });
        } else {
            changeAuth({
                loggedIn: 'regular',
                userInfo
            });
        }
    }

    const logOut = () => {
        document.cookie = "adminAuth= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; //TO DO, ADD COOKIE NAME FOR REGULAR USER AND FOR ADMIN;
        document.cookie = "authToken= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"; //TO DO, ADD COOKIE NAME FOR REGULAR USER AND FOR ADMIN;
        changeAuth({
            loggedIn: false,
            adminVerify: false,
            userInfo: {
                _id: '',
                side: ''
            }
        });
    }

    const verifyA = () => {
        debugger;
        changeAuth({ ...auth, adminVerify: true });
    }

    const changeSide = (userInfo) => {
        changeAuth({ ...auth, userInfo });
    }

    useEffect(() => {
        const serverCheck = async () => {
            const cookies = document.cookie;
            if (cookies.includes('adminAuth')) {
                const verifyAdmin = await verifyAdminLogin('adminAuth');
                if (verifyAdmin.error) {
                    logOut();
                    return;
                }
                logIn(verifyAdmin.userInfo);
            } else if (cookies.includes('authToken')) {
                const verify = await verifyUser('authToken');
                if (verify.error) {
                    logOut();
                    return;
                }
                logIn(verify.userInfo);
            } else {
                logOut();
            }
        }
        serverCheck();
    }, []);

    if (auth.loggedIn === null) {
        return (<div>Loading...</div>);
    }

    return (
        <AuthContext.Provider value={{
            loggedIn: auth.loggedIn,
            userInfo: auth.userInfo,
            adminVerify: auth.adminVerify,
            changeSide: changeSide,
            verifyA: verifyA,
            logIn: logIn,
            logOut: logOut,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default App;