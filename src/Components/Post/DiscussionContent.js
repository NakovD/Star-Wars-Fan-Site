import React from 'react';
import styles from './DiscussionContent.module.css';

const DiscussionContent = ({ data }) => {
    let dateString = '';
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
            <p className={styles.likes}>{data.likes} people liked this!</p>
        </div>
    )
}

export default DiscussionContent;