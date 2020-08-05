import React from 'react';
import styles from './SmallButton.module.css';



const SmallButton = ({ text, onClick }) => {

    return (
        <button className={styles.myButton} onClick={onClick}>{text}</button>
    )
}

export default SmallButton;