import React from 'react';
import styles from './HeroCard.module.css';


const HeroCard = ({ img }) => {


    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img src={img}></img>
                <div className={styles.descriptions}>
                    <h1>Anakin Skywalker</h1>
                    <button>
                    Click for more details
                </button>
                </div>
            </div>
        </div>
    );
}

export default HeroCard;