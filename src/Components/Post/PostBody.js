import React from 'react';
import styles from './PostBody.module.css';


const PostBody = (props) => {
    return (
        <div className={`${styles.post} ${(props.side === 'light') ? styles.lightSide : styles.darkSide}`}>
            {props.children}
        </div>
    )
}

export default PostBody;