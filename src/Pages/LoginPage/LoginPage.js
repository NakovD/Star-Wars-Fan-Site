import React from 'react';
import AuthForm from '../../Components/Auth/AuthForm.js';
import InputFieldSpan from '../../Components/Auth/InputFieldSpan.js';
import AuthHeading from '../../Components/Auth/AuthHeading.js';
import InputSumbit from '../../Components/Auth/InputSubmit.js';
import Or from '../../Components/Auth/Or.js';
import FBButton from '../../Components/Auth/FBButton.js';


const LoginPage = () => {


    return (
        <AuthForm type="login">
            <AuthHeading text="Welcome back hero! Just a few steps and you are in!" />
            <InputFieldSpan type="text" usedFor="Username" className="fontawesome-user" />
            <InputFieldSpan type="password" usedFor="Password" className="fontawesome-user" />
            <InputSumbit value="Log In" />
            <Or />
            <FBButton text="Continue with" />
        </AuthForm>
    )
}

export default LoginPage;