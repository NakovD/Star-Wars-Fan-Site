import React from 'react';
import styles from './AuthForm.module.css';


const AuthForm = (props) => {

    return (
        <div id={styles.authForm} onSubmit={props.onSubmit}>
            <form name={props.type}>
            {props.children}
            </form>
        </div>
    )
}

export default AuthForm;