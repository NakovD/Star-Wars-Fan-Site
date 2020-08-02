import React, { useContext } from 'react';
import styles from './FBButton.module.css';
import { useHistory } from "react-router-dom";
import { FacebookProvider, Login } from 'react-facebook';
import { fbAuthenticate } from '../../utils/auth.js';
import AuthContext from '../../Context.js';


const FBButton = ({ text }) => {
    const authInfo = useContext(AuthContext);
    let history = useHistory();

    const handleResponse = async (data) => {
        const authUser = await fbAuthenticate(data.profile);
        if (authUser.error) {
            alert(authUser.message);
            return;
        }
        authInfo.logIn(authUser.userInfo);
        history.push('/characters');
        return;
    }

    const handleError = (error) => {
        console.log(error);
    }

    return (
        <FacebookProvider appId="2167827723342149">
            <Login
                onCompleted={handleResponse}
                onError={handleError}>
                {({ loading, handleClick, error, data }) => (
                    <button
                        className={`${styles.fb} ${styles.connect}`}
                        onClick={handleClick}>{text} Facebook</button>
                )}
            </Login>
        </FacebookProvider>

    )
}


export default FBButton;