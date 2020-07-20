import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SmallButton.module.css';





const SmallButton = ({ text }) => {

    return (
    <Link to="/sign in" className={styles.myButton}>{text}</Link>
    )
}

export default SmallButton;