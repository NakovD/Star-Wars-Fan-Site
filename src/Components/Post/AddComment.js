import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './AddComment.module.css';
import { addComment } from '../../utils/discussionUtils/dbOperations.js';




const AddComment = ({ changeMethod, userId }) => {
    const [comment, changeComment] = useState('');
    const { discussionId } = useParams();

    const addCommentFunc = async () => {
        if (!comment) {
            return;
        }

        const addComment_ = await addComment(comment, userId, discussionId);
        if (addComment_.error) {
            alert(addComment_.message);
            return;
        }
        changeComment('');
        // changeMethod(prev => !prev);
    }

    return (
        <div className={styles.addComment}>
            <textarea value={comment} onChange={e => changeComment(e.target.value)}></textarea>
            <button className={styles.addCommentBttn} onClick={addCommentFunc}>Add Comment!</button>
        </div>
    )
}


export default AddComment;