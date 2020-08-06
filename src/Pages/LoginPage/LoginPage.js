import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from '../../Components/Auth/AuthForm.js';
import InputFieldSpan from '../../Components/Auth/InputFieldSpan.js';
import InputField from '../../Components/Auth/InputField.js';
import AuthHeading from '../../Components/Auth/AuthHeading.js';
import InputSumbit from '../../Components/Auth/InputSubmit.js';
import Or from '../../Components/Auth/Or.js';
import FBButton from '../../Components/Auth/FBButton.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js';
import { validator } from '../../utils/authValidator.js';
import submitAuthData from '../../utils/authenticationUtils/submitData.js';
import AuthContext from '../../Context.js';


const LoginPage = () => {
    const authInfo = useContext(AuthContext);
    const history = useHistory();
    const [authData, changeAuthData] = useState({
        username: '',
        usernameErr: '',
        password: '',
        passwordErr: '',
        submitErr: ''
    });

    const onSuccAuth = (userInfo) => {
        authInfo.logIn(userInfo);
        history.push('/characters');
    }
    const onFailAuth = (mssg) => { changeAuthData({ ...authData, submitErr: mssg }); }

    const onErr = (msg, prop) => { changeAuthData({ ...authData, [`${prop}Err`]: msg }) };
    const noErr = (prop) => { changeAuthData({ ...authData, [`${prop}Err`]: false }) }

    return (
        <AuthForm type="login"
            onSubmit={e => submitAuthData(e, 'login', authData, changeAuthData, onSuccAuth, onFailAuth)}>
            <AuthHeading text="Welcome back hero! Just a few steps and you are in!" />
            <InputFieldSpan className="fontawesome-user" >
                <InputField
                    type="text"
                    usedFor="Username"
                    value={authData.username}
                    error={authData.usernameErr}
                    onBlur={e => validator('username', authData, onErr, noErr)}
                    onChange={e => changeAuthData({ ...authData, username: e.target.value })}
                />
            </InputFieldSpan>
            <InputFieldSpan className="fontawesome-lock" >
                <InputField
                    type="password"
                    usedFor="Password"
                    value={authData.password}
                    error={authData.passwordErr}
                    onBlur={e => validator('password', authData, onErr, noErr)}
                    onChange={e => changeAuthData({ ...authData, password: e.target.value })}
                />
            </InputFieldSpan>
            <InputSumbit value="Log In" />
            {authData.submitErr ? (<ErrNotification error={authData.submitErr} />) : null}
            <Or />
            <FBButton text="Continue with" />
        </AuthForm>
    )
}

export default LoginPage;