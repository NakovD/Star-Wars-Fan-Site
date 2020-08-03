import React, { useContext } from 'react';
import styles from './FBButton.module.css';
import { useHistory } from "react-router-dom";
import fbHandler from '../../utils/fbHandler.js';
import AuthContext from '../../Context.js';


const FBButton = ({ text }) => {
    const authInfo = useContext(AuthContext);
    let history = useHistory();

    const onSucc = (userInfo) => {
        authInfo.logIn(userInfo);
        history.push('/characters');
    }
    const onErr = (errMessage) => {
        alert(errMessage);
        return;
    }

    const handleFBSubmit = (e) => {
        e.preventDefault();
        const submit = fbHandler('registerFbUser', onSucc, onErr);
        return submit;
    }

    return (
        <button
            className={`${styles.fb} ${styles.connect}`}
            onClick={e => handleFBSubmit(e)}>{text} Facebook
        </button>
    )
}


export default FBButton;