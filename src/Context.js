import React from 'react';


const AuthContext = React.createContext({
    loggedIn: null,
    adminVerify: null,
    userInfo: {
        _id: '',
        side: '',
        type: ''
    },
    changeSide: () => { },
    verifyA: () => { },
    logIn: () => { },
    logOut: () => { },
});


export default AuthContext;