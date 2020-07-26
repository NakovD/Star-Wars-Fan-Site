import React, { useState, useContext } from 'react';
import AuthForm from '../../Components/Auth/AuthForm.js';
import InputFieldSpan from '../../Components/Auth/InputFieldSpan.js';
import InputField from '../../Components/Auth/InputField.js';
import AuthHeading from '../../Components/Auth/AuthHeading.js';
import InputSumbit from '../../Components/Auth/InputSubmit.js';
import Or from '../../Components/Auth/Or.js';
import FBButton from '../../Components/Auth/FBButton.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js';
import { validator, submitValidator } from '../../utils/authValidator.js';
import { login } from '../../utils/auth.js';
import authContext from '../../Context.js';


const LoginPage = (props) => {
    const authInfo = useContext(authContext);

    const [authData, changeAuthData] = useState({
        username: '',
        usernameErr: '',
        password: '',
        passwordErr: '',
        submitErr: ''
    });

    const errorCheck = (property, value) => {
        const check = validator(property, authData);
        if (check.error) {
            changeAuthData({ ...authData, [`${property}Err`]: check.message });
        } else {
            changeAuthData({ ...authData, [`${property}Err`]: false });
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const check = submitValidator(authData, 'login');
        if (check.error) {
            changeAuthData({ ...authData, submitErr: check.message });
            return;
        }
        const logInUser = await login(authData);
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
                    onBlur={e => errorCheck('username', authData.username)}
                    onChange={e => changeAuthData({ ...authData, username: e.target.value })}
                />
            </InputFieldSpan>
            <InputFieldSpan className="fontawesome-lock" >
                <InputField
                    type="password"
                    usedFor="Password"
                    value={authData.password}
                    error={authData.passwordErr}
                    onBlur={e => errorCheck('password', authData.password)}
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