import React from 'react';
import styles from './AddComment.module.css';




const AddComment = ({ value, onClick, onChange }) => {



    return (
        <div className={styles.addComment}>
            <textarea value={value} onChange={onChange}></textarea>
            <button className={styles.addCommentBttn} onClick={onClick}>Add Comment!</button>
        </div>
    )
}


export default AddComment;