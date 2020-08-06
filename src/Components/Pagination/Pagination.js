import React from 'react';
import styles from './Pagination.module.css';
import { Link } from 'react-router-dom';


const Pagination = ({ prev, next, keyWord, maxPages }) => {

    return (
        <div className={styles.pagination}>
            {(prev >= 0) ? (<button className={styles.prev}><Link to={`/characters?page=${prev}`} >Previous Page</Link></button>) : null}
            {(next < maxPages) ? (<button className={styles.next}><Link to={`/characters?page=${next}&keyWord=${keyWord}`} >Next Page</Link></button>) : null}
        </div>
    )
}

export default Pagination;