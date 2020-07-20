import React, { useState } from 'react';
import styles from './CommentSection.module.css';


const CommentSection = (props) => {

    const [showComment, changeVis] = useState(false);
    const showCommentTextArea = () => {
        if (!showComment) {
            changeVis(true);
        } else {
            changeVis(false);
        }
    }
    const addCommentFunc = () => {
        console.log('comment Send!');
    }
    return (
        <div className={styles.commentSection}>
            <p>Comments:</p>
            <button className={styles.myButton} onClick={showCommentTextArea}>Add Comment!</button>
            <div className={`${styles.addComment} ${showComment ? styles.show : styles.hide}`}>
                <textarea type="text" placeholder="Write a comment!"></textarea>
                <button className={styles.addCommentBttn} onClick={addCommentFunc}>Add Comment!</button>
            </div>
            {props.children}
        </div>
    )
}

export default CommentSection;