import React from 'react';
import styles from './HeroCard.module.css';
import { Link } from 'react-router-dom';
import ImgComponent from '../ImgComponent/ImgComponent.js';


const HeroCard = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
            <ImgComponent imgLink={props.imgURL} alt="heroIMG"/>
                <div className={styles.descriptions}>
                    <h1>{props.name}</h1>
                    <Link to={`/charDetails/${props._id}`}>
                        <button>
                            Click for more details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HeroCard;