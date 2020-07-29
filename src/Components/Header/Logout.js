import React from 'react';
import styles from './Route.module.css';

const Logout = ({ side, onClick }) => {
    let color = '';
    if (side === 'dark') {
        color = 'red';
    } else if (side === 'light') {
        color = 'green';
    } else if (side === 'admin') {
        color = 'purple';
    }
    return (
        <li className={styles[color]}>
            <p className={styles.logout} onClick={onClick}>Logout</p>
        </li>
    )
}

export default Logout;