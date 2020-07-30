import React from 'react';
import InputField from '../../Components/Auth/InputField.js';
import styles from './Settings.module.css';


const Settings = () => {

    return (
        <div className={styles.settings}>
            <h4>Settings:</h4>
            <select>
                <option value='Dark Side'>Dark Side</option>
                <option value='Light Side'>Light Side</option>
            </select>
            <button className={`${styles.primary} ${styles.ghost}`}>Change side</button>
            <InputField usedFor='Image Link' />
            <button className={`${styles.primary}`}>Change profile picture</button>
        </div>
    )
}

export default Settings;