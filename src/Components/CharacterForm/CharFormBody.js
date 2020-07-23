import React from 'react';
import styles from './CharFormBody.module.css';

const CharFormBody = (props) => {
    return (
        <section id={styles.charForm}>
            <h2>{props.headingText}</h2>
            <div className={styles.container}>
                <form name="htmlForm" onSubmit={props.onSubmit}>
                    {props.children}
                </form>
            </div>
        </section>
    )
}

export default CharFormBody;