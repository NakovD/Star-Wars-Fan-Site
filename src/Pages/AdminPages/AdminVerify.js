import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthForm from '../../Components/Auth/AuthForm.js';
import AuthHeading from '../../Components/Auth/AuthHeading.js';
import InputFieldSpan from '../../Components/Auth/InputFieldSpan.js';
import InputSumbit from '../../Components/Auth/InputSubmit.js';
import InputField from '../../Components/Auth/InputField.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js';
import { verifyAdmin } from '../../utils/authenticationUtils/adminAuth.js';
import AuthContext from '../../Context.js';



const AdminVerify = () => {
    const authInfo = useContext(AuthContext);
    const history = useHistory();
    const [secretData, changeSecretData] = useState({
        secretKey: '',
        err: false
    });

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!secretData.secretKey) {
            changeSecretData({ ...secretData, err: 'Please fill the field!' });
            return;
        }
        const verify = await verifyAdmin({
            secretCode: secretData.secretKey
        });
        if (verify.error) {
            changeSecretData({ ...secretData, err: verify.message });
            return;
        }
        authInfo.verifyA();
        history.push('/adminOnly/login');
    }

    return (
        <AuthForm onSubmit={e => submitHandler(e)} >
            <AuthHeading text="Hi! This page is strictly restricted to admins only! If you are not admin, please leave!" />
            <AuthHeading text="To continue, you have to provide the secret code, which is given only by another admin!" />
            <InputFieldSpan className="fontawesome-lock">
                <InputField
                    type="password"
                    usedFor="Secret Key"
                    value={secretData.secretKey}
                    onChange={e => changeSecretData({ ...secretData, secretKey: e.target.value })}
                />
            </InputFieldSpan>
            <InputSumbit value="Check me!" />
            {secretData.err ? (<ErrNotification error={secretData.err} />) : null}
        </AuthForm>
    )
}

export default AdminVerify;