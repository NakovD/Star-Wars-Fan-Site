import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from '../../Components/Auth/AuthForm.js';
import InputFieldSpan from '../../Components/Auth/InputFieldSpan.js';
import InputField from '../../Components/Auth/InputField.js';
import AuthHeading from '../../Components/Auth/AuthHeading.js';
import InputSumbit from '../../Components/Auth/InputSubmit.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js'
import AdminP from './AdminP.js';
import { validator } from '../../utils/authenticationUtils/authValidator.js';
import submitAuthData from '../../utils/authenticationUtils/submitData.js';
import AuthContext from '../../Context.js';


const AdminLogin = () => {
    const authInfo = useContext(AuthContext);
    const history = useHistory();
    const [authData, changeAuth] = useState({
        username: '',
        usernameErr: false,
        password: '',
        passwordErr: false,
        submitErr: false
    });
    const onSuccAuth = (userInfo) => {
        authInfo.logIn(userInfo);
        history.push('/adminOnly/characters');
    };
    const onFailAuth = (msg) => { changeAuth({ ...authData, submitErr: msg }) };

    const onErr = (msg, prop) => { changeAuth({ ...authData, [`${prop}Err`]: msg }) };
    const noErr = (prop) => { changeAuth({ ...authData, [`${prop}Err`]: false }) };

    return (
        <AuthForm type="register"
            onSubmit={e => submitAuthData(e, 'admin/login', authData, changeAuth, onSuccAuth, onFailAuth)}>
            <AuthHeading text="Welcome back, apprentice!" />
            <InputFieldSpan className="fontawesome-user" >
                <InputField
                    type="text"
                    usedFor="Username"
                    value={authData.username}
                    error={authData.usernameErr}
                    onChange={e => changeAuth({ ...authData, username: e.target.value })}
                    onBlur={e => validator('username', authData, onErr, noErr)}
                />
            </InputFieldSpan>
            <InputFieldSpan className="fontawesome-lock" >
                <InputField
                    type="password"
                    usedFor="Password"
                    value={authData.password}
                    error={authData.passwordErr}
                    onChange={e => changeAuth({ ...authData, password: e.target.value })}
                    onBlur={e => validator('password', authData, onErr, noErr)}
                />
            </InputFieldSpan>
            <AdminP textBef="You are new here?" href="/adminOnly/register" textAft="Join the dark side then!" />
            <InputSumbit value="Log In" />
            {authData.submitErr ? (<ErrNotification error={authData.submitErr} />) : null}
        </AuthForm>
    )
}

export default AdminLogin;