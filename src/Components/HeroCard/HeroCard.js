import React from 'react';
import styles from './HeroCard.module.css';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';


const HeroCard = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img src={props.imgURL} alt="heroIMG"></img>
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