import React from 'react';
import styles from './SmallButton.module.css';



const SmallButton = ({ text, onClick }) => {

    return (
        <button className={styles.myButton} onClick={e => {
            e.preventDefault();
            onClick()
        }}>{text}</button>
    )
}

export default SmallButton;