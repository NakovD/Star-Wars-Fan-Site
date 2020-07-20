import React from 'react';
import styles from './PostBody.module.css';


const PostBody = (props) => {

    const darkSide = false;
    return (
        <div className={`${styles.post} ${darkSide ? styles.darkSide : styles.lightSide}`}>
            {props.children}
        </div>
    )
}

export default PostBody;