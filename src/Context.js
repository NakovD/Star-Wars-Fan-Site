import React from 'react';


const AuthContext = React.createContext({
    loggedIn: null,
    userInfo: {
        _id: '',
        side: ''
    },
    logIn: () => { },
    logOut: () => { }
});


export default AuthContext;