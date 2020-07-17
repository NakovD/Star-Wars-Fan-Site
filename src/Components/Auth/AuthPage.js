import React from 'react';
import styles from './AuthPage.module.css';
import FBButton from './FBButton.js';
import PopUp from '../PopUp/PopUp.js';
import InputFieldSpan from './InputFieldSpan.js';
import AuthHeading from './AuthHeading.js';
import InputSumbit from './InputSubmit.js';

const AuthPage = ({ type }) => {
    if (type === 'register') {
        return (
            <div id={styles.authForm}>
                <form name="form-register">
                    <AuthHeading text="Are you new here? Welcome! Join us now!" />
                    <InputFieldSpan type="text" usedFor="Username" className="fontawesome-user" />
                    <InputFieldSpan type="password" usedFor="Password" className="fontawesome-lock" />
                    <InputFieldSpan type="password" usedFor="Repeat password" className="fontawesome-lock" />
                    <InputSumbit value="Sign In" />
                    <p className={styles.or}>Or</p>
                    <FBButton text="Sign In with" />
                    <PopUp text="If you join for the first time with FB, go to your profile page and choose your side!" />
                </form>
            </div>
        );
    } else if (type === 'login') {
        return (
            <div id={styles.authForm}>
                <form name='form-login'>
                    <AuthHeading text="Welcome back hero! Just a few steps and you are in!" />
                    <InputFieldSpan type="text" usedFor="Username" className="fontawesome-user" />
                    <InputFieldSpan type="password" usedFor="Password" className="fontawesome-user" />
                    <InputSumbit value="Log In" />
                    <p className={styles.or}>Or</p>
                    <FBButton text="Continue with" />
                </form>
            </div>
        );
    }
}


export default AuthPage;