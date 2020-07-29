import React from 'react';
import styles from './Comment.module.css';
import { Link } from 'react-router-dom';

const Comment = ({ commentContent, creatorName, creator }) => {

    return (
        <div className={styles.comment}>
            <Link className={`${styles.profileLink}`} to={`/profilePage/${creator}`}>{creatorName}</Link>
            <p className={styles.commentText}>{commentContent}</p>
        </div>
    )
}

export default Comment;