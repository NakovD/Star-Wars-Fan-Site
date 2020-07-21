import React from 'react';
import styles from './HeroDetailsBody.module.css';
import ImgComponent from '../ImgComponent/ImgComponent.js';

const HeroDetailsBody = (props) => {

    return (
        <div className={`${styles.heroDetails} ${styles.glowTextDark}`}>
            <div className={styles.heroIMG}>
                <ImgComponent imgLink={props.img} alt="heroIMG" />
            </div>
            {props.children}
        </div>
    );
}

export default HeroDetailsBody;