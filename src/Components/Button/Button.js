import React from 'react';
// import './Button.css';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';




const Button = ({ text }) => {
    return (
        <div className={styles.container}>
            <Link to='/log in' className={`${styles.btn} ${styles.effect01}`}><span>{text}</span></Link>
        </div>
    )
}

export default Button;