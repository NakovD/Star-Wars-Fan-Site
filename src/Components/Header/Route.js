import React from 'react';
import styles from './Route.module.css';


const Route = ({ color, goTo }) => {

    // <li>
    //     <a href="#">Home</a>
    // </li>
    //     <li className="green">
    //         <a href="#">Jedi</a>
    //     </li>
    //     <li className="red">
    //         <a href="#">Sith</a>
    //     </li>
    //     <li className="yellow">
    //         <a href="#">Sentinel</a>
    //     </li>
    //     <li className="purple">
    //         <a href="#">Samuel L. Jackson</a>
    //     </li>
    return (
        <li className={styles[color]}>
            <a href={goTo}>{goTo}</a>
        </li>

    )
}

export default Route;