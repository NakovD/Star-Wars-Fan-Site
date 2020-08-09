import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import ForumBody from '../../Components/Forum/ForumBody.js';
import Button from '../../Components/Button/Button.js';
import TableForum from '../../Components/Forum/TableForum.js';
import TableRow from '../../Components/Forum/TableRow.js';
import SmallButton from '../../Components/Forum/SmallButton.js';
import getSortKeyWord from '../../utils/otherUtils/sortForumPosts.js';
import styles from './ForumHomePage.module.css';
import useFetchData from '../../utils/customHooks/customHooks.js';

const ForumHomePage = () => {
    const [posts, changePosts] = useState([]);
    const location = useLocation();
    const history = useHistory();
    const sortWord = getSortKeyWord(location.search);

    useFetchData(`posts?sort=${sortWord}`, changePosts);

    return (
        <ForumBody >
            <Button href='/createDiscussion' text="Create Discussion" link={true} />
            <div className={styles.sortField} >
                Sort by:
                <SmallButton
                    text='Likes'
                    onClick={e => history.push('/forum?sort=likes')} />
                <SmallButton
                    text='Comments'
                    onClick={e => history.push('/forum?sort=comments')} />
                <SmallButton
                    text='Date'
                    onClick={e => history.push('/forum?sort=date')} />
            </div>
            <TableForum >
                {posts.map(obj => { return <TableRow key={obj._id} {...obj} /> })}
            </TableForum>
        </ForumBody>
    );
}

export default ForumHomePage;