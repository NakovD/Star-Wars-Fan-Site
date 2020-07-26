import React from 'react';
import styles from './Route.module.css';

const Logout = ({ side, onClick }) => {
    let color = '';
    if (side === 'dark') {
        color = 'red';
    } else if (side === 'light') {
        color = 'green';
    }
    return (
        <li className={styles[color]}>
            <p onClick={onClick}>Logout</p>
        </li>
    )
}

export default Logout;