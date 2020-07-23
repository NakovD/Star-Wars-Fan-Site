import React from 'react';
import styles from './ErrorNotification.module.css';




const ErrorNotification = (props) => {
    return (
        <div className={styles.error}>!
            <p>{props.error}</p></div>
    )
}

export default ErrorNotification;