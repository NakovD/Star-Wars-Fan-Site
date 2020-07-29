import React from 'react';
import styles from './HeroCard.module.css';
import { Link, withRouter } from 'react-router-dom';
import ImgComponent from '../ImgComponent/ImgComponent.js';


const HeroCard = (props) => {

    let detailsPath = '';
    if (props.location.pathname === '/adminOnly/characters') {
        detailsPath = `/adminOnly/charDetails/${props._id}`;
    } else if (props.location.pathname === '/characters') {
        detailsPath = `/charDetails/${props._id}`;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <ImgComponent imgLink={props.imgURL} alt="heroIMG" />
                <div className={styles.descriptions}>
                    <h1>{props.name}</h1>
                    <Link to={detailsPath}>
                        <button>
                            Click for more details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default withRouter(HeroCard);