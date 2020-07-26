import React from 'react';
import styles from './Route.module.css';
import { Link } from 'react-router-dom';


const Route = ({ side, goTo, href }) => {
    let color = '';
    if (side === 'dark') {
        color = 'red';
    } else if (side === 'light') {
        color = 'green';
    } else {
        color = 'yellow';
    }
    return (
        <li className={styles[color]}>
            <Link to={`/${href}`}>{goTo}</Link>
        </li>

    )
}

export default Route;