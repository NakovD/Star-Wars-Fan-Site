import React from 'react';
import Button from '../../Components/Button/Button.js';
import TableForum from '../../Components/Forum/TableForum.js';
import TableRow from '../../Components/Forum/TableRow.js';
import SmallButton from '../../Components/Forum/SmallButton.js';
import styles from './ForumHomePage.module.css';






const ForumHomePage = () => {
    const info = [{
        title: 'Rey is flat like a skateboard, my dudes, I just cant fap on her...',
        creator: 'migo-chigo123123',
        replies: '120',
        likes: '2000'
    },
    {
        title: 'Rey is flat like a skateboard, my dudes, I just cant fap on her...',
        creator: 'migo-chigo123123',
        replies: '120',
        likes: '2000'
    },
    {
        title: 'Rey is flat like a skateboard, my dudes, I just cant fap on her...',
        creator: 'migo-chigo123123',
        replies: '120',
        likes: '2000'
    },
    {
        title: 'Rey is flat like a skateboard, my dudes, I just cant fap on her...',
        creator: 'migo-chigo123123',
        replies: '120',
        likes: '2000'
    },
    ]

    return (
        <div className={styles.forum}>
            <h2>Star wars Fans - forum</h2>
            <Button text="Create Discussion" />
            <div className={styles.sortField} >Sort by:
            <SmallButton text='Likes' />
                <SmallButton text='Replies' />
                <SmallButton text='Date' />
            </div>
            <TableForum >
                {info.map((obj, i) => { return <TableRow key={i} {...obj} /> })}
            </TableForum>
        </div>)
}

export default ForumHomePage;