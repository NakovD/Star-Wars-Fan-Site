import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import AuthForm from '../../Components/Auth/AuthForm.js';
import InputFieldSpan from '../../Components/Auth/InputFieldSpan.js';
import InputField from '../../Components/Auth/InputField.js';
import AuthHeading from '../../Components/Auth/AuthHeading.js';
import InputSumbit from '../../Components/Auth/InputSubmit.js';
import AdminP from './AdminP.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js';
import {
    validator,
    submitValidator
} from '../../utils/authValidator'
import { authenticate } from '../../utils/adminAuth.js';
import AuthContext from '../../Context.js';

const AdminRegister = (props) => {
    const authInfo = useContext(AuthContext);
    const [auth, changeAuth] = useState({
        username: '',
        usernameErr: false,
        password: '',
        passwordErr: false,
        repeatPassword: '',
        repeatPasswordErr: false,
        submitErr: false
    });

    const onErr = (msg, prop) => { changeAuth({ ...auth, [`${prop}Err`]: msg }) }
    const noErr = (prop) => { changeAuth({ ...auth, [`${prop}Err`]: false }) }

    const submitHandler = async (e) => {
        e.preventDefault();
        const dataCheck = submitValidator(auth, 'adminRegister');
        if (dataCheck.error) {
            changeAuth({ ...auth, submitErr: dataCheck.message });
            return;
        }
        const adminAuth = await authenticate({
            username: auth.username,
            password: auth.password,
            repeatPassword: auth.repeatPassword
        }, 'admin/register');
        if (adminAuth.error) {
            changeAuth({ ...auth, submitErr: adminAuth.message });
            return
        }
        authInfo.logIn(adminAuth.userInfo);
        props.history.push('/adminOnly/characters');
        return;
    }

    return (
        <AuthForm type="register" onSubmit={e => submitHandler(e)}>
            <AuthHeading text="It seems you are worthy! Join to rule the Empire with us!" />
            <InputFieldSpan className="fontawesome-user" >
                <InputField
                    type="text"
                    usedFor="Username"
                    value={auth.username}
                    error={auth.usernameErr}
                    onBlur={e => validator('username', auth, onErr, noErr)}
                    onChange={e => changeAuth({ ...auth, username: e.target.value })}
                />
            </InputFieldSpan>
            <InputFieldSpan className="fontawesome-lock" >
                <InputField
                    type="password"
                    usedFor="Password"
                    value={auth.password}
                    error={auth.passwordErr}
                    onBlur={e => validator('password', auth, onErr, noErr)}
                    onChange={e => changeAuth({ ...auth, password: e.target.value })}
                />
            </InputFieldSpan>
            <InputFieldSpan className="fontawesome-lock" >
                <InputField
                    type="password"
                    usedFor="Repeat Password"
                    value={auth.repeatPassword}
                    error={auth.repeatPasswordErr}
                    onBlur={e => validator('repeatPassword', auth, onErr, noErr)}
                    onChange={e => changeAuth({ ...auth, repeatPassword: e.target.value })}
                />
            </InputFieldSpan>
            <AdminP textBef="You are already registered?" href="/adminOnly/login" textAft="Then log in now!" />
            <InputSumbit value="Sign In" />
            {auth.submitErr ? (<ErrNotification error={auth.submitErr} />) : null}
        </AuthForm>
    )
}

export default withRouter(AdminRegister);