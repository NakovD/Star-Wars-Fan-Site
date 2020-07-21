import React from 'react';
import AuthForm from '../../Components/Auth/AuthForm.js';
import AuthHeading from '../../Components/Auth/AuthHeading.js';
import InputFieldSpan from '../../Components/Auth/InputFieldSpan.js';
import InputSumbit from '../../Components/Auth/InputSubmit.js';



const AdminVerify = () => {

    return (
        <AuthForm >
            <AuthHeading text="Hi! This page is strictly restricted to admins only! If you are not admin, please leave!"/>
            <AuthHeading text="To continue, you have to provide the secret code, which is given only by another admin!"/>
            <InputFieldSpan type="password" usedFor="Secret Code" className="fontawesome-lock" />
            <InputSumbit value="Check me!" />
        </AuthForm>
    )
}

export default AdminVerify;