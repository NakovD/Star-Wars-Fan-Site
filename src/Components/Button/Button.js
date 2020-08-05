import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';




const Button = ({ href, text, onClick, link }) => {
    if (link) {
        return (
            <div className={styles.container}>
                <Link to={href} className={`${styles.btn} ${styles.effect01}`}><span>{text}</span></Link>
            </div>
        )
    } else {
        return (
            <div className={styles.container}>
                <p className={`${styles.btn} ${styles.effect01}`} onClick={onClick}><span>{text}</span></p>
            </div>
        );
    }
}

export default Button;