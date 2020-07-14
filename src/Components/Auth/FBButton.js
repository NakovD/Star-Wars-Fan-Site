import React from 'react';
import styles from './FBButton.module.css';



const FBButton = ({text}) => {


    return (
        <button  className={`${styles.fb} ${styles.connect}`}>{text} in with Facebook</button>
    )
}


export default FBButton;