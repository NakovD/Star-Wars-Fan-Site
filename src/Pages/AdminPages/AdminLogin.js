import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import AuthForm from '../../Components/Auth/AuthForm.js';
import InputFieldSpan from '../../Components/Auth/InputFieldSpan.js';
import InputField from '../../Components/Auth/InputField.js';
import AuthHeading from '../../Components/Auth/AuthHeading.js';
import InputSumbit from '../../Components/Auth/InputSubmit.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js'
import AdminP from './AdminP.js';
import { validator, submitValidator } from '../../utils/authValidator.js';
import { authenticate } from '../../utils/adminAuth.js';
import AuthContext from '../../Context.js';


const AdminLogin = (props) => {
    const authInfo = useContext(AuthContext);
    const [authData, changeAuth] = useState({
        username: '',
        usernameErr: false,
        password: '',
        passwordErr: false,
        submitErr: false
    });

    const onErr = (msg, prop) => { changeAuth({ ...authData, [`${prop}Err`]: msg }) };
    const noErr = (prop) => { changeAuth({ ...authData, [`${prop}Err`]: false }) }

    const submitHandler = async (e) => {
        e.preventDefault();
        const submitDataCheck = submitValidator(authData, 'login');
        if (submitDataCheck.error) {
            changeAuth({ ...authData, submitErr: submitDataCheck.message });
            return;
        }
        const logInAdmin = await authenticate({
            username: authData.username,
            password: authData.password
        }, 'admin/login');
        if (logInAdmin.error) {
            changeAuth({ ...authData, submitErr: logInAdmin.message });
            return;
        }
        authInfo.logIn(logInAdmin.userInfo);
        props.history.push('/adminOnly/characters');


    }

    return (
        <AuthForm type="register" onSubmit={e => submitHandler(e)}>
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

export default withRouter(AdminLogin);