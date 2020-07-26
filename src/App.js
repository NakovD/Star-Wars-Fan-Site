import React, { useState } from 'react';
import AuthContext from './Context.js';

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
        document.cookie = 'clear cookie'; //TO DO, ADD COOKIE NAME FOR REGULAR USER AND FOR ADMIN;
        changeAuth({
            loggedIn: false,
            userInfo: {
                _id: '',
                side: ''
            }
        });
    }


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