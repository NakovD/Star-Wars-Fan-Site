import React from 'react';
import ImgComponent from '../ImgComponent/ImgComponent.js';
import styles from './ProfileBody.module.css';

const ProfileBody = (props) => {
    return (
        <div className={styles['card-container']}>
            <span className={`${styles.pro} ${styles[props.userInfo.side]}`}>
                {(props.userInfo.side === 'dark') ? 'Dark' : 'Light'} side
                </span>
            <ImgComponent imgLink={props.userInfo.profilePic} alt='profileIMG' />
            <h3>{props.userInfo.username}</h3>
            {props.children}
        </div>
    )
}

export default ProfileBody;