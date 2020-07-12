import React from 'react';
import styles from './Burger.module.css';




const Burger = ({ visibility }) => {

    return (
        <div id={styles.container}>
            <div id={styles.burger} className={visibility ? styles.active : null}>
                <div className={`${styles.bun} ${styles.top}`}></div>
                <div className={styles.filling}></div>
                <div className={`${styles.bun} ${styles.bottom}`}></div>
            </div>
        </div>

    )
}

export default Burger;