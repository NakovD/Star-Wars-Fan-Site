import React from 'react';
import styles from './ProfileInfo.module.css';
import { Link } from 'react-router-dom';
import '../../starwars-glyphicons/css/starwars-glyphicons.css';
import ranks from '../../utils/otherUtils/ranks.js';

const ProfileInfo = ({ profilePic, username, _id, side, discussionsStarted }) => {

    const rank = side ? ranks(side, discussionsStarted.length) : '';

    return (
        <div className={`${styles.profilePage} ${(side === 'light') ? styles.light : styles.dark}`}>
            <p className={styles.profileName}><Link to={`/profilePage/${_id}`}>{username}</Link></p>
            <img src={profilePic} alt="ProfileIMG" />
            <p className={styles.rankIcon}>Rank:</p><span className={`swg ${rank.icon} swg-3x`}></span>
            <p className={styles.rankText}>{rank.text}</p>
        </div>
    )
}

export default ProfileInfo;