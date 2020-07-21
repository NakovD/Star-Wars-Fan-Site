import React from 'react';
import styles from './AdminP.module.css';
import { Link } from 'react-router-dom';


const AdminP = ({ href, textBef, textAft }) => {
    return (
        <p className={styles.else}>{textBef} <Link to={href}>{textAft}</Link></p>
    )
}

export default AdminP;