import React from 'react';
import InputField from './InputField.js';
import FBButton from './FBButton.js';
import styles from './AuthForm.module.css';
// import PopUp from '../PopUp/PopUp.js';

const AuthForm = ({ type }) => {
    if (type === 'register') {
        return (
            <div id={styles.authForm}>
                <form name='form-register'>
                    <p className={styles.welcomeText}>Hello there! Are you new here? Join us now!</p>
                    <InputField placeholder="Username" id="user" className="fontawesome-user" error={false} />
                    <InputField placeholder="Repeat Password" id="pass" className="fontawesome-lock" error={false} />
                    <InputField placeholder="Password" id="pass" className="fontawesome-lock" error={false} />
                    <input type="submit" value="Sign In" />
                    <p>Or</p>
                    <FBButton text="Sign In with" />
                    {/* <PopUp /> */}
                </form>
            </div>);
    } else if (type === 'login') {
        return (
            <div id={styles.authForm}>
                <form name='form-login'>
                    <p className={styles.welcomeText}>Welcome back, hero! </p>
                    <InputField placeholder="Username" id="user" className="fontawesome-user" error={false} />
                    <InputField placeholder="Password" id="pass" className="fontawesome-lock" error={false} />
                    <input type="submit" value="Login" />
                    <p>Or</p>
                    <FBButton text="Continue with" />
                </form>
            </div>)
    }
}


export default AuthForm;