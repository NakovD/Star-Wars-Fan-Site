import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styles from './AddComment.module.css';
import { addComment } from '../../utils/discussionUtils/dbOperations.js';
import SmallButton from '../Forum/SmallButton.js';




const AddComment = ({ userId, maxPages, currentPage }) => {
    const [comment, changeComment] = useState('');
    const { discussionId } = useParams();
    const history = useHistory();

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
    const next = currentPage + 1;
    const prev = currentPage - 1;

    return (
        <div className={styles.addComment}>
            <textarea value={comment} onChange={e => changeComment(e.target.value)}></textarea>
            {(prev > 0) ? (<SmallButton
                text='Previous'
                onClick={e => history.push(`/discussion/${discussionId}?page=${prev}`)} />) : null}
            {(next <= maxPages) ? (<SmallButton
                text='Next'
                onClick={e => history.push(`/discussion/${discussionId}?page=${next}`)} />) : null}
            <button className={styles.addCommentBttn} onClick={addCommentFunc}>Add Comment!</button>
        </div>
    )
}


export default AddComment;