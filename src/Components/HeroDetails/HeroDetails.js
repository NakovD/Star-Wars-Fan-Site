import React from 'react';
import styles from './HeroDetails.module.css';
import InfoParagraph from './InfoParagraph.js';



const HeroDetails = (props) => {
    return (
        <div className={`${styles.heroDetails} ${styles.glowTextDark}`}>
            <div className={styles.heroIMG}>
                <img src={props.imgURL} alt="heroIMG"></img>
            </div>
            <div className={styles.heroContent}>
                <div className={styles.heroName}>
                    <h4>{props.name}</h4>
                </div>
                <div className={styles.heroFaction}>Factions:<InfoParagraph info={!props.factions ? '' : props.factions.join(', ') } /></div>
                <div className={styles.heroSpecies}>Species:<InfoParagraph info={props.species} /></div>
                <div className={styles.era}>Era:<InfoParagraph info={props.era} /></div>
                <div className={styles.heroDescription}>
                    Description:
                    <InfoParagraph info={props.description}/>
                </div>
            </div>
        </div>
    );
}

export default HeroDetails;