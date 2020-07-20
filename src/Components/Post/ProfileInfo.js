import React from 'react';
import styles from './ProfileInfo.module.css';


const ProfileInfo = () => {

    const darkSide = false;
    
    return (
        <div className={`${styles.profilePage} ${darkSide ? styles.dark : styles.light}`}>
            <p className={styles.profileName}>ProfileName</p>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/obi-wan-show-1567178968.jpg?crop=0.486xw:0.973xh;0.512xw,0.00340xh&resize=480:*" alt="noimg" />
            <p className={styles.rankIcon}>Rank:</p><span className="swg swg-darthvader swg-2x"></span>
            <p>Vader himself!</p>
        </div>
    )
}

export default ProfileInfo;