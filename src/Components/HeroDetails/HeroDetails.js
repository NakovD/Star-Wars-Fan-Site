import React from 'react';
import styles from './HeroDetails.module.css';
import InfoParagraph from './InfoParagraph.js';



const HeroDetails = () => {

    return (
        <div className={`${styles.heroDetails} ${styles.glowTextDark}`}>
            <div className={styles.heroIMG}>
                <img src="https://pbs.twimg.com/media/DnEky1KXsAUDoY2.jpg" alt="heroIMG"></img>
            </div>
            <div className={styles.heroContent}>
                <div className={styles.heroName}>
                    <h4>Darth Revan</h4>
                </div>
                <div className={styles.heroFaction}>Factions:<InfoParagraph info='Light side, Jedi, Old Republic' /></div>
                <div className={styles.heroSpecies}>Species:<InfoParagraph info='Human' /></div>
                <div className={styles.era}>Era:<InfoParagraph info='Old Republic' /></div>
                <div className={styles.heroDescription}>
                    Description:
                    <InfoParagraph info="Revan was a Sith Lord and the namesake of the Sith Eternal army's 3rd Legion. Since the history of
                    the
                    Sith was kept hidden from the galaxy, only Sith cultists knew the significance of Revan's name.
                    Sith trooper legions were numerically identified, yet also named after an ancient Sith Lord. The
                    Revan Legion
                    was activated in 35 ABY along with the rest of the Sith Eternal's forces during the war
                    between the First
                    Order and the Resistance."/>
                </div>
            </div>
        </div>
    );
}

export default HeroDetails;