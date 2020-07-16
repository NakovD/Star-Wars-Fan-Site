import React from 'react';
import styles from './HeroCard.module.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


const HeroCard = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img src={props.img}></img>
                <div className={styles.descriptions}>
                    <h1>Anakin Skywalker</h1>
                    <button>
                        <Link to="/characterDetails">Click for more details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeroCard;