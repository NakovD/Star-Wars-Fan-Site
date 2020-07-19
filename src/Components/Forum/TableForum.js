import React from 'react';
import TableRow from './TableRow';
import styles from './TableForum.module.css';


const TableForum = (props) => {


    return (
        <table className={styles.tableContainer}>
            <thead>
                <tr>
                    <th className={styles.discussionName}><h1>Discussion</h1></th>
                    <th className={styles.creator}><h1>Created by</h1></th>
                    <th className={styles.replies}><h1>Replies</h1></th>
                    <th className={styles.likes}><h1>Likes</h1></th>
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}

export default TableForum;