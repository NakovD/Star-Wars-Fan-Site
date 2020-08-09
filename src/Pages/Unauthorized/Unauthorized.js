import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Unauthorized.module.css';

const Unauthorized = () => {

    return (
        <>
            <div className={styles.unauthorized}>
                <p>There isn't a page like this or You are not allowed to go this way! Sorry!</p>
                <Link to='/characters' >Go to Characters page?</Link>
                <div className={`${styles.saber} ${styles.first}`}></div>
                <div className={`${styles.saber} ${styles.second}`}></div>
            </div>
        </>
    )
}

export default Unauthorized;