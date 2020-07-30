import React from 'react';
import styles from './HomeBody.module.css';
import IMGComp from '../ImgComponent/ImgComponent.js';
import LukeIMG from './luke.png';

const HomeBody = (props) => {
    return (
        <div className={styles.homeContainer}>
            <IMGComp imgLink={LukeIMG} alt='Jedi Luke IMG' />
            <div className={styles.homeText}>
                {props.children}
            </div>
        </div>
    )
}

export default HomeBody;