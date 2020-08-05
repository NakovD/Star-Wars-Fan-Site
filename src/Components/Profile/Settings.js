import React from 'react';
import InputField from '../../Components/Auth/InputField.js';
import styles from './Settings.module.css';


const Settings = ({ currentSide, imgLink, changeSide, onChangeSide, onChangeImg,changeIMG }) => {

    return (
        <div className={styles.settings}>
            <h4>Settings:</h4>
            <select
                onChange={onChangeSide}
                defaultValue={(currentSide === 'dark') ? 'Dark Side' : 'Light Side'}>
                <option value='Dark Side'>Dark Side</option>
                <option value='Light Side'>Light Side</option>
            </select>
            <button
                onClick={changeSide}
                className={`${styles.primary} ${styles.ghost}`}>Change side</button>
            <InputField
                value={imgLink}
                onChange={onChangeImg}
                usedFor='Image Link' />
            <button
                onClick={changeIMG}
                className={`${styles.primary}`}>Change profile picture</button>
        </div>
    )
}

export default Settings;