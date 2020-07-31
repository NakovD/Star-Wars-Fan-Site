import React, { useState } from 'react';
import InputField from '../../Components/Auth/InputField.js';
import styles from './Settings.module.css';
import changeSideHandler from '../../utils/changeSide.js';
import changeProfileIMG from '../../utils/changeProfilePic.js';

const Settings = ({ side, userId }) => {
    const [changedSide, changeSide] = useState(side);
    const [imageLink, changeIMG] = useState('');

    return (
        <div className={styles.settings}>
            <h4>Settings:</h4>
            <select
                onChange={e => changeSide(e.target.value)}
                defaultValue={(side === 'dark') ? 'Dark Side' : 'Light Side'}>
                <option value='Dark Side'>Dark Side</option>
                <option value='Light Side'>Light Side</option>
            </select>
            <button
                onClick={e => changeSideHandler(changedSide, side, userId)}
                className={`${styles.primary} ${styles.ghost}`}>Change side</button>
            <InputField
                value={imageLink}
                onChange={e => changeIMG(e.target.value)}
                usedFor='Image Link' />
            <button
                onClick={e => changeProfileIMG(imageLink, userId).then(d => {
                    return !d ? changeIMG('') : null;
                })}
                className={`${styles.primary}`}>Change profile picture</button>
        </div>
    )
}

export default Settings;