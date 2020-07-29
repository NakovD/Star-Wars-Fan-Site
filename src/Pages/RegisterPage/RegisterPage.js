import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import AuthForm from '../../Components/Auth/AuthForm.js';
import PopUp from '../../Components/PopUp/PopUp.js';
import InputFieldSpan from '../../Components/Auth/InputFieldSpan.js';
import InputField from '../../Components/Auth/InputField.js';
import AuthHeading from '../../Components/Auth/AuthHeading.js';
import InputSumbit from '../../Components/Auth/InputSubmit.js';
import Or from '../../Components/Auth/Or.js';
import FBButton from '../../Components/Auth/FBButton.js';
import SelectComp from '../../Components/SelectComp/SelectComp.js';
import { validator, submitValidator } from '../../utils/authValidator.js';
import { authenticate } from '../../utils/auth.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js';
import AuthContext from '../../Context.js';

const RegisterPage = (props) => {
    const authInfo = useContext(AuthContext);
    const [authData, changeData] = useState({
        username: '',
        usernameErr: false,
        password: '',
        passwordErr: false,
        repeatPassword: '',
        repeatPasswordErr: false,
        side: '',
        submitErr: ''
    });
    const submitFunc = async (e) => {
        e.preventDefault();
        const check = submitValidator(authData, 'register');
        if (check.error) {
            changeData({ ...authData, submitErr: check.message });
            return;
        }

        const registerUser = await authenticate({
            username: authData.username,
            password: authData.password,
            repeatPassword: authData.repeatPassword,
            side: authData.side
        }, 'register');
        if (!registerUser.error) {
            authInfo.logIn(registerUser.userInfo);
            props.history.push('/characters');
            return;
        }

    }
    const onErr = (msg, prop) => { changeData({ ...authData, [`${prop}Err`]: msg }) };
    const noErr = (prop) => { changeData({ ...authData, [`${prop}Err`]: false }) }

    return (
        <>
            <AuthForm type="register" onSubmit={e => submitFunc(e)} >
                <AuthHeading text="Are you new here? Welcome! Join us now!" />
                <InputFieldSpan className="fontawesome-user">
                    <InputField
                        type="text"
                        usedFor="Username"
                        value={authData.username}
                        error={authData.usernameErr}
                        onBlur={e => validator('username', authData, onErr, noErr)}
                        onChange={e => changeData({ ...authData, username: e.target.value })}
                    />
                </InputFieldSpan>
                <InputFieldSpan className="fontawesome-lock">
                    <InputField
                        type="password"
                        usedFor="Password"
                        error={authData.passwordErr}
                        value={authData.password}
                        onChange={e => changeData({ ...authData, password: e.target.value })}
                        onBlur={e => validator('password', authData,
                            (errMsg) => changeData({ ...authData, passwordErr: errMsg }),
                            () => changeData({ ...authData, passwordErr: false }))}
                    />
                </InputFieldSpan>
                <InputFieldSpan className="fontawesome-lock">
                    <InputField
                        type="password"
                        usedFor="Repeat password"
                        value={authData.repeatPassword}
                        error={authData.repeatPasswordErr}
                        onChange={e => changeData({ ...authData, repeatPassword: e.target.value })}
                        onBlur={e => validator('repeatPassword', authData,
                            (errMsg) => changeData({ ...authData, repeatPasswordErr: errMsg }),
                            () => changeData({ ...authData, repeatPasswordErr: false }))}
                    />
                </InputFieldSpan>
                <SelectComp
                    selectName="side"
                    defaultValue="default"
                    label="Choose your side:"
                    onChange={e => changeData({ ...authData, side: e.target.value })}>
                    <option value="default" disabled hidden>Choose here</option>
                    <option value="dark">Dark Side</option>
                    <option value="light">Light Side</option>
                </SelectComp>
                <InputSumbit value="Sign In" />
                {authData.submitErr ? (<ErrNotification error={authData.submitErr} />) : null}
                <Or />
                <FBButton text="Sign In with" />
                <PopUp text="If you join for the first time with FB, go to your profile page and choose your side!" />
            </AuthForm>
        </>
    )
}

export default withRouter(RegisterPage);