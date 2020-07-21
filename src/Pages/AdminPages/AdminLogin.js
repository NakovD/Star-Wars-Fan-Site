import React from 'react';
import AuthForm from '../../Components/Auth/AuthForm.js';
import InputFieldSpan from '../../Components/Auth/InputFieldSpan.js';
import AuthHeading from '../../Components/Auth/AuthHeading.js';
import InputSumbit from '../../Components/Auth/InputSubmit.js';
import AdminP from './AdminP.js';

const AdminLogin = () => {

    return (
        <AuthForm type="register">
            <AuthHeading text="Welcome back, apprentice!" />
            <InputFieldSpan type="text" usedFor="Username" className="fontawesome-user" />
            <InputFieldSpan type="password" usedFor="Repeat password" className="fontawesome-lock" />
            <AdminP textBef="You are new here?" href="/adminOnly/register" textAft="Join the dark side then!"/>
            <InputSumbit value="Log In" />
        </AuthForm>
    )
}

export default AdminLogin;