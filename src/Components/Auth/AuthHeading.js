import React from 'react';
import styles from './AuthHeading.module.css';




const AuthHeading = ({ text }) => {

    return (
    <p className={styles.welcomeText}>{text}</p>
    )
}

export default AuthHeading;