import React from 'react';
import styles from './Comment.module.css';
import { Link } from 'react-router-dom';

const Comment = ({ username, commentText }) => {

    return (
        <div className={styles.comment}>
            <Link to='/userPage:id'>{username}</Link>
            <p>{commentText}</p>
        </div>
    )
}

export default Comment;