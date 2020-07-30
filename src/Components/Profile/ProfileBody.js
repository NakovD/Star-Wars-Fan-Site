import React from 'react';
import ImgComponent from '../ImgComponent/ImgComponent.js';
import styles from './ProfileBody.module.css';

const ProfileBody = (props) => {
    // const side = 
    return (
        <div className={styles['card-container']}>
            <span className={`${styles.pro} ${styles.dark}`}>Dark side</span>
            <ImgComponent imgLink='https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png/revision/latest?cb=20130621175844' alt='profileIMG' />
            <h3>dido123</h3>
            {props.children}
        </div>
    )
}

export default ProfileBody;