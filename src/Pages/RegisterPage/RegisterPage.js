import React, {  useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from '../../Components/Auth/AuthForm.js';
import PopUp from '../../Components/PopUp/PopUp.js';
import InputFieldSpan from '../../Components/Auth/InputFieldSpan.js';
import InputField from '../../Components/Auth/InputField.js';
import AuthHeading from '../../Components/Auth/AuthHeading.js';
import InputSumbit from '../../Components/Auth/InputSubmit.js';
import Or from '../../Components/Auth/Or.js';
import FBButton from '../../Components/Auth/FBButton.js';
import SelectComp from '../../Components/SelectComp/SelectComp.js';
import { validator } from '../../utils/authenticationUtils/authValidator.js';
import submitAuthData from '../../utils/authenticationUtils/submitData.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js';
import { useAuth } from '../../utils/customHooks/customHooks.js';
import AuthContext from '../../Context.js';

const RegisterPage = () => {
    const authInfo = useContext(AuthContext);
    const history = useHistory();
    const [authData, changeData] = useAuth('register');

    const onSuccAuth = (userInfo) => {
        authInfo.logIn(userInfo);
        history.push('/characters');
    }
    const onFailAuth = (mssg) => {
        changeData({ ...authData, submitErr: mssg });
    }
    const onErr = (msg, prop) => { changeData({ ...authData, [`${prop}Err`]: msg }) };
    const noErr = (prop) => { changeData({ ...authData, [`${prop}Err`]: false }) }

    return (
        <>
            <AuthForm type="register"
                onSubmit={e => submitAuthData(e, 'register', authData, changeData, onSuccAuth, onFailAuth)} >
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

export default RegisterPage;