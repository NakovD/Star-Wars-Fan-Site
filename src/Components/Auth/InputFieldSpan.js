import React from 'react';
import styles from './InputFieldSpan.module.css';



const InputFieldSpan = (props) => {
    return (
        <div className={styles.inputField}>
            <span className={props.className}></span>
            {props.children}
        </div>
    )
}

export default InputFieldSpan;