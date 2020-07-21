import React from 'react';
import AuthForm from '../../Components/Auth/AuthForm.js';
import InputFieldSpan from '../../Components/Auth/InputFieldSpan.js';
import AuthHeading from '../../Components/Auth/AuthHeading.js';
import InputSumbit from '../../Components/Auth/InputSubmit.js';
import AdminP from './AdminP.js';

const AdminRegister = () => {

    return (
        <AuthForm type="register">
            <AuthHeading text="It seems you are worthy! Join to rule the Empire with us!" />
            <InputFieldSpan type="text" usedFor="Username" className="fontawesome-user" />
            <InputFieldSpan type="password" usedFor="Password" className="fontawesome-lock" />
            <InputFieldSpan type="password" usedFor="Repeat password" className="fontawesome-lock" />
            <AdminP textBef="You are already registered?" href="/adminOnly/login" textAft="Then log in now!"/>
            <InputSumbit value="Sign In" />
        </AuthForm>
    )
}

export default AdminRegister;