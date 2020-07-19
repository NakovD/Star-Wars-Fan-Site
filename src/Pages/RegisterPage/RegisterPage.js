import React from 'react';
import AuthForm from '../../Components/Auth/AuthForm.js';
import PopUp from '../../Components/PopUp/PopUp.js';
import InputFieldSpan from '../../Components/Auth/InputFieldSpan.js';
import AuthHeading from '../../Components/Auth/AuthHeading.js';
import InputSumbit from '../../Components/Auth/InputSubmit.js';
import Or from '../../Components/Auth/Or.js';
import FBButton from '../../Components/Auth/FBButton.js';


const RegisterPage = () => {


    return (
        <AuthForm type="register">
            <AuthHeading text="Are you new here? Welcome! Join us now!" />
            <InputFieldSpan type="text" usedFor="Username" className="fontawesome-user" />
            <InputFieldSpan type="password" usedFor="Password" className="fontawesome-lock" />
            <InputFieldSpan type="password" usedFor="Repeat password" className="fontawesome-lock" />
            <InputSumbit value="Sign In" />
            <Or />
            <FBButton text="Sign In with" />
            <PopUp text="If you join for the first time with FB, go to your profile page and choose your side!" />
        </AuthForm>
    )
}

export default RegisterPage;