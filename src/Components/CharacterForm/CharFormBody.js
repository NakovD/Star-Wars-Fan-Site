import React from 'react';
import styles from './CharFormBody.module.css';

const CharFormBody = (props) => {

    return (
        <section id={styles.charForm}>
            <h2>{props.headingText}</h2>
            <div className={styles.container}>
                <form name="htmlForm" method="POST">
                    {props.children}
                    <textarea name="description" placeholder="Description" required></textarea>
                    <button name="send" type="submit" className={styles.submit}>{props.btnText}</button>
                </form>
            </div>
        </section>
    )
}

export default CharFormBody;