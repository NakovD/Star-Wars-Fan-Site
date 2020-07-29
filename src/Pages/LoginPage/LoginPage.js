import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import AuthForm from '../../Components/Auth/AuthForm.js';
import InputFieldSpan from '../../Components/Auth/InputFieldSpan.js';
import InputField from '../../Components/Auth/InputField.js';
import AuthHeading from '../../Components/Auth/AuthHeading.js';
import InputSumbit from '../../Components/Auth/InputSubmit.js';
import Or from '../../Components/Auth/Or.js';
import FBButton from '../../Components/Auth/FBButton.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js';
import { validator, submitValidator } from '../../utils/authValidator.js';
import { authenticate } from '../../utils/auth.js';
import AuthContext from '../../Context.js';


const LoginPage = (props) => {
    const authInfo = useContext(AuthContext);

    const [authData, changeAuthData] = useState({
        username: '',
        usernameErr: '',
        password: '',
        passwordErr: '',
        submitErr: ''
    });

    const onErr = (msg, prop) => { changeAuthData({ ...authData, [`${prop}Err`]: msg }) };
    const noErr = (prop) => { changeAuthData({ ...authData, [`${prop}Err`]: false }) }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(document.cookies);
        const check = submitValidator(authData, 'login');
        if (check.error) {
            changeAuthData({ ...authData, submitErr: check.message });
            return;
        }
        const logInUser = await authenticate({
            username: authData.username,
            password: authData.password
        }, 'login');
        if (!logInUser.error) {
            authInfo.logIn(logInUser.userInfo);
            props.history.push('/characters');
            return;
        }
    }

    return (
        <AuthForm type="login" onSubmit={e => submitHandler(e)}>
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

export default withRouter(LoginPage);