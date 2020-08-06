import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from '../../Components/Auth/AuthForm.js';
import InputFieldSpan from '../../Components/Auth/InputFieldSpan.js';
import InputField from '../../Components/Auth/InputField.js';
import AuthHeading from '../../Components/Auth/AuthHeading.js';
import InputSumbit from '../../Components/Auth/InputSubmit.js';
import AdminP from './AdminP.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js';
import { validator } from '../../utils/authenticationUtils/authValidator.js';
import submitAuthData from '../../utils/authenticationUtils/submitData.js';
import AuthContext from '../../Context.js';

const AdminRegister = () => {
    const authInfo = useContext(AuthContext);
    const history = useHistory();
    const [authData, changeAuth] = useState({
        username: '',
        usernameErr: false,
        password: '',
        passwordErr: false,
        repeatPassword: '',
        repeatPasswordErr: false,
        submitErr: false
    });
    const onSuccAuth = (userInfo) => {
        authInfo.logIn(userInfo);
        history.push('/adminOnly/characters');
    };
    const onFailAuth = (msg) => { changeAuth({ ...authData, submitErr: msg }) };

    const onErr = (msg, prop) => { changeAuth({ ...authData, [`${prop}Err`]: msg }) }
    const noErr = (prop) => { changeAuth({ ...authData, [`${prop}Err`]: false }) }

    return (
        <AuthForm type="register"
            onSubmit={e => submitAuthData(e, 'admin/register', authData, changeAuth, onSuccAuth, onFailAuth)}>
            <AuthHeading text="It seems you are worthy! Join to rule the Empire with us!" />
            <InputFieldSpan className="fontawesome-user" >
                <InputField
                    type="text"
                    usedFor="Username"
                    value={authData.username}
                    error={authData.usernameErr}
                    onBlur={e => validator('username', authData, onErr, noErr)}
                    onChange={e => changeAuth({ ...authData, username: e.target.value })}
                />
            </InputFieldSpan>
            <InputFieldSpan className="fontawesome-lock" >
                <InputField
                    type="password"
                    usedFor="Password"
                    value={authData.password}
                    error={authData.passwordErr}
                    onBlur={e => validator('password', authData, onErr, noErr)}
                    onChange={e => changeAuth({ ...authData, password: e.target.value })}
                />
            </InputFieldSpan>
            <InputFieldSpan className="fontawesome-lock" >
                <InputField
                    type="password"
                    usedFor="Repeat Password"
                    value={authData.repeatPassword}
                    error={authData.repeatPasswordErr}
                    onBlur={e => validator('repeatPassword', authData, onErr, noErr)}
                    onChange={e => changeAuth({ ...authData, repeatPassword: e.target.value })}
                />
            </InputFieldSpan>
            <AdminP textBef="You are already registered?" href="/adminOnly/login" textAft="Then log in now!" />
            <InputSumbit value="Sign In" />
            {authData.submitErr ? (<ErrNotification error={authData.submitErr} />) : null}
        </AuthForm>
    )
}

export default AdminRegister;