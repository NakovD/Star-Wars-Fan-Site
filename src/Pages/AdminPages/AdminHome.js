import React, { useState } from 'react';
import HeroCard from '../../Components/HeroCard/HeroCard.js';
import styles from './AdminHome.module.css';
import { useFetchData } from '../../utils/customHooks/customHooks.js';




const AdminHome = () => {
    const [characters, changeChars] = useState([]);

    useFetchData('characters/adminOnly', changeChars);
    if (characters.length < 1) {
        return (
            <div className={styles.noChars}>Sorry there arent any characters to check! Come back later!</div>
        )
    }
    return (
        <>
            {characters.map(character => { return (<HeroCard key={character._id} {...character} />) })}
        </>
    )

}

export default AdminHome;