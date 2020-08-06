import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Discussions.module.css';

const Discussions = ({ discussions }) => {
    let only3 = [];
    if (discussions) {
        const mostReplies = discussions.sort((a, b) => b.comments.length - a.comments.length);
        only3 = mostReplies.slice(0, 3);
    }
    return (
        <div className={styles.discussions}>
            <h5>Discussions:</h5>
            <ul>
                {only3.map(el => {
                    return (<Link key={el._id} to={`/discussion/${el._id}`}><li >{el.title}</li></Link>)
                })}
                {(only3.length === 0) ? (<div>This user doesn't have any discussions yet!</div>) : null}
            </ul>
        </div>
    )
}

export default Discussions;