import React, { useState } from 'react';
import styles from './PopUp.module.css';

//!! WORK IN PROGRESS! ITS NOT FINISHED!

const PopUp = ({ text }) => {
    const [showPopUp, changeVis] = useState(false);
    const show_hideFunc = () => {
        if (!showPopUp) {
            changeVis(true);
        } else {
            changeVis(false);
        }
    }
    return (
            // eslint-disable-next-line
        <div className={styles.symbol} onMouseOver={show_hideFunc} onMouseLeave={show_hideFunc}>&#10071;
            <p className={`${styles.symbolPopUp} ${showPopUp ? styles.show : styles.hide}`}>{text}</p>
        </div>
    )
}

export default PopUp;