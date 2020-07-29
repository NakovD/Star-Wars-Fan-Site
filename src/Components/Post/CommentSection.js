import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './CommentSection.module.css';
import addComment from '../../utils/addComment.js';
import AuthContext from '../../Context.js';

const CommentSection = (props) => {
    const authInfo = useContext(AuthContext);
    const discussionId = props.match.params.id;

    const [showComment, changeVis] = useState(false);
    const [comment, changeComment] = useState('');

    const addCommentFunc = async () => {
        if (!comment) {
            return;
        }

        const addComment_ = await addComment(comment, authInfo.userInfo.userId, discussionId);
        if (addComment_.error) {
            alert(addComment_.message);
            return;
        }
        changeVis(!showComment);
        changeComment('');
        props.history.push(`/discussion/${discussionId}`);

    }

    return (
        <div className={styles.commentSection}>
            <p>Comments:</p>
            <button className={styles.myButton} onClick={e => changeVis(!showComment)}>Add Comment!</button>
            <div className={`${styles.addComment} ${showComment ? styles.show : styles.hide}`}>
                <textarea type="text" value={comment} onChange={e => changeComment(e.target.value)} placeholder="Write a comment!"></textarea>
                <button className={styles.addCommentBttn} onClick={addCommentFunc}>Add Comment!</button>
            </div>
            {props.children}
        </div>
    )
}

export default withRouter(CommentSection);