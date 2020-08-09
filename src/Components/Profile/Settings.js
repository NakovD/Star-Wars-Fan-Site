import React, { useState, useContext } from 'react';
import InputField from '../../Components/Auth/InputField.js';
import styles from './Settings.module.css';
import {
    changeSideHandler,
    changeProfileIMG
} from '../../utils/changeUserDataUtils/changeUserData.js';
import AuthContext from '../../Context.js';


const Settings = ({ currentSide, changeMethod, userId }) => {
    const [side, changeSide] = useState(currentSide);
    const [imgURL, changeURL] = useState('');
    const authInfo = useContext(AuthContext);

    const changeSideFunc = (newSide) => {
        const oldUserInfo = authInfo.userInfo;
        oldUserInfo.side = newSide;
        authInfo.changeSide(oldUserInfo);
        return;
    }


    return (
        <div className={styles.settings}>
            <h4>Settings:</h4>
            <select
                value={side}
                onChange={e => changeSide(e.target.value)}>
                <option value='dark'>Dark Side</option>
                <option value='light'>Light Side</option>
            </select>
            <button
                onClick={e => changeSideHandler(side, currentSide, userId, changeMethod, changeSideFunc)}
                className={`${styles.primary} ${styles.ghost}`}>Change side</button>
            <InputField
                value={imgURL}
                onChange={e => changeURL(e.target.value)}
                usedFor='Image Link' />
            <button
                onClick={e => changeProfileIMG(imgURL, userId, changeMethod, changeURL)}
                className={`${styles.primary}`}>Change profile picture</button>
        </div>
    )
}

export default Settings;