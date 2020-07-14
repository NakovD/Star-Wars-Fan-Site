import React from 'react';
import styles from './InputField.module.css';
import ErrorNotification from '../ErrorNot/ErrorNotification.js';



const InputField = ({ placeholder, id, className,error }) => {

    return (
        <div className={styles.inputField}>
            <span className={className}></span>
            <input type="text" id={id} placeholder={placeholder} />
            {/* <ErrorNotification text={"Invalid username!"} error={error}/> */}
        </div>
    )
}

export default InputField;