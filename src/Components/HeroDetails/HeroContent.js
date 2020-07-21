import React from 'react';
import HeroInfoDiv from './HeroInfoDiv.js';
import styles from './HeroContent.module.css';



const HeroContent = (props) => {

    return (
        <div className={styles.heroContent}>
            <div className={styles.heroName} >
                <h4>{props.name}</h4>
            </div>
            <HeroInfoDiv className={styles.heroFaction} label="Factions" data={!props.factions ? '' : props.factions.join(', ')} ></HeroInfoDiv>
            <HeroInfoDiv className={styles.heroSpecies} label="Species:" data={props.species} ></HeroInfoDiv>
            <HeroInfoDiv className={styles.era} label="Era:" data={props.era} ></HeroInfoDiv>
            <HeroInfoDiv className={styles.heroDescription} label="Description" data={props.description} ></HeroInfoDiv>
        </div>
    )
}

export default HeroContent;