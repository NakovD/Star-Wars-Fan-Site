import React from 'react';
import styles from './Pagination.module.css';
import { Link } from 'react-router-dom';


const Pagination = ({ prev, next, maxPages }) => {


    return (
        <>
            {(prev >= 0) ? (<button className={styles.prev}><Link to={`/characters?page=${prev}`} >Previous Page</Link></button>) : null}
            {(next < maxPages) ? (<button className={styles.next}><Link to={`/characters?page=${next}`} >Next Page</Link></button>) : null}
        </>
    )
}

export default Pagination;