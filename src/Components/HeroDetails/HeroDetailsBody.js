import React from 'react';
import styles from './HeroDetailsBody.module.css';
import ImgComponent from '../ImgComponent/ImgComponent.js';

const HeroDetailsBody = (props) => {
    let side = '';
    if (props.factions && props.factions.includes('Dark')) {
        side = 'dark';
    }

    return (
        <div className={`${styles.heroDetails} ${(side === 'dark') ? styles.glowTextDark : styles.glowTextLight}`}>
            <div className={styles.heroIMG}>
                <ImgComponent imgLink={props.img} alt="heroIMG" />
            </div>
            {props.children}
        </div>
    );
}

export default HeroDetailsBody;