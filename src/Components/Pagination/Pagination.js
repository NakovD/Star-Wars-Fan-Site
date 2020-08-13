import React from 'react';
import styles from './Pagination.module.css';
import { Link } from 'react-router-dom';


const Pagination = ({ prev, next, keyWord, maxPages }) => {
    let previousLink = `/characters?page=${prev}`;
    let nextLink = `/characters?page=${next}`;
    if (keyWord) {
        previousLink += `&keyWord=${keyWord}`;
        nextLink += `&keyWord=${keyWord}`;
    }
    return (
        <div className={styles.pagination}>
            {(prev > 0) ? (<button className={styles.prev}><Link to={previousLink} >Previous Page</Link></button>) : null}
            {(next <= maxPages) ? (<button className={styles.next}><Link to={nextLink} >Next Page</Link></button>) : null}
        </div>
    )
}

export default Pagination;