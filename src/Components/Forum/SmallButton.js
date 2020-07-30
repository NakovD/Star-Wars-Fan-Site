import React from 'react';
import styles from './SmallButton.module.css';





const SmallButton = ({ text, onClick,disabled }) => {

    return (
        <button className={styles.myButton} disabled={disabled} onClick={onClick}>{text}</button>
    )
}

export default SmallButton;