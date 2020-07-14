import React, { useState } from 'react';
import styles from './PopUp.module.css';

//!! WORK IN PROGRESS! ITS NOT FINISHED!

const PopUp = () => {
    const state = { showPopUp: true }
    const show_hideFunc = () => {
    }
    return (
        <div className={styles.symbol} onClick={show_hideFunc}>&#10071;
            <p className={`${styles.symbolPopUp} ${state.showPopUp ? styles.show : styles.hide}`}></p>
        </div>
    )
}

export default PopUp;