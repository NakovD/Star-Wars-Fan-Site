import React from 'react';
import styles from './ProfileInfo.module.css';
import { Link } from 'react-router-dom';


const ProfileInfo = ({ profilePic, username, _id, side }) => {
    return (
        <div className={`${styles.profilePage} ${(side === 'light') ? styles.light : styles.dark}`}>
            <p className={styles.profileName}><Link to={`/profilePage/${_id}`}>{username}</Link></p>
            <img src={profilePic} alt="ProfileIMG" />
            <p className={styles.rankIcon}>Rank:</p><span className="swg swg-darthvader swg-2x"></span>
            <p>Vader himself!</p>
        </div>
    )
}

export default ProfileInfo;