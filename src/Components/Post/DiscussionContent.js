import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './DiscussionContent.module.css';
import SmallButton from '../Forum/SmallButton.js';
import { likePost } from '../../utils/discussionUtils/dbOperations.js';

const DiscussionContent = ({ data, userId, changeMethod }) => {
    let dateString = '';
    const { discussionId } = useParams();
    let disabled = false;
    if (data.usersLiked) {
        if (data.usersLiked.includes(userId)) {
            disabled = true;
        }
    }
    
    const likeHandler = async () => {
        const like = await likePost(userId, discussionId);
        if (like.error) {
            alert(like.message);
            return;
        }
        changeMethod(prev => !prev);
        return;
    }

    if (data.createdAt) {
        const dateArr = data.createdAt.split('-');
        const date = dateArr[2].slice(0, 2);
        dateString = `${date}-${dateArr[1]}-${dateArr[0]}`;
    }

    return (
        <div className={styles.content}>
            <p className={styles.titlePost}>{data.title}</p>
            <p className={styles.postDescription}>{data.description}</p>
            <p className={styles.postedOn}>Posted on: {dateString} </p>
            {!disabled ? (<SmallButton text="Like" onClick={likeHandler} />) : null}
            <p className={styles.likes}>{data.likes} people liked this!</p>
        </div>
    )
}

export default DiscussionContent;