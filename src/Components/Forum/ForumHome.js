import React from 'react';
import Button from '../Button/Button.js';
// import './ForumHome.css';
import TableRow from './TableRow.js';
import styles from './ForumHome.module.css';
import SmallButton from './SmallButton.js';

const ForumHome = () => {
    const info = {
        title: 'Rey is flat like a skateboard, my dudes, I just cant fap...',
        creator: 'migo-chigo123123',
        replies: '120',
        likes: '2000'
    }
    return (
        <div className={styles.forum}>
            <h2>Star wars Fans - forum</h2>
            <Button text="Create Discussion" />
            <div className={styles.sortField} >Sort by:
                <SmallButton text='Likes' />
                <SmallButton text='Replies' />
                <SmallButton text='Date' />
            </div>
            <table className={styles.tableContainer}>
                <thead>
                    <tr>
                        <th className="discussionName"><h1>Discussion</h1></th>
                        <th className="creator"><h1>Created by</h1></th>
                        <th className="replies"><h1>Replies</h1></th>
                        <th className="likes"><h1>Likes</h1></th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow {...info} />
                    {/* <TableRow />
                <TableRow />
                <TableRow />
                <TableRow /> */}
                </tbody>
            </table>
        </div>
    )
}

export default ForumHome;