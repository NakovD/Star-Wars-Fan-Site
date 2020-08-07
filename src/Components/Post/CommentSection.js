import React  from 'react';
import { withRouter } from 'react-router-dom';
import Comment from '../../Components/Post/Comment.js';
import styles from './CommentSection.module.css';

const CommentSection = ({ comments }) => {

    return (
        <div className={styles.commentSection}>
            <p>Comments:</p>
            {comments ? comments.map(comment => {
                return (<Comment key={comment._id} {...comment} />)
            }) : null}
        </div>
    )
}

export default withRouter(CommentSection);