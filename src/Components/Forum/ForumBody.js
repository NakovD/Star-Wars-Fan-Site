import React from 'react';
import styles from './ForumBody.module.css';

const ForumBody = (props) => {

    return (
        <div className={styles.forum}>
            <h2>Star wars Fans - forum</h2>
            {props.children}
        </div>
    )
}

export default ForumBody;