import React from 'react';
import styles from './InputFieldSpan.module.css';
import InputField from './InputField.js';



const InputFieldSpan = ({ type, usedFor, className }) => {
    return (
        <div className={styles.inputField}>
            <span className={className}></span>
            <InputField type={type} usedFor={usedFor}/>
            {/* <ErrorNotification text={"Invalid username!"} error={error}/> */}
        </div>
    )
}

export default InputFieldSpan;