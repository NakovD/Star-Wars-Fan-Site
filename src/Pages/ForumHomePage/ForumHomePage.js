import React, { useState, useEffect } from 'react';
import ForumBody from '../../Components/Forum/ForumBody.js';
import Button from '../../Components/Button/Button.js';
import TableForum from '../../Components/Forum/TableForum.js';
import TableRow from '../../Components/Forum/TableRow.js';
import SmallButton from '../../Components/Forum/SmallButton.js';
import styles from './ForumHomePage.module.css';
import serverRequests from '../../utils/back-end-service.js';






const ForumHomePage = () => {

    const [posts, changePosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await serverRequests.GET('posts');
            changePosts(data);
        }
        getPosts();
    }, []);

    return (
        <ForumBody >
            <Button href='/createDiscussion' text="Create Discussion" />
            <div className={styles.sortField} >Sort by:
            <SmallButton text='Likes' />
                <SmallButton text='Replies' />
                <SmallButton text='Date' />
            </div>
            <TableForum >
                {posts.map(obj => { return <TableRow key={obj._id} {...obj} /> })}
            </TableForum>
        </ForumBody>
    );
}

export default ForumHomePage;