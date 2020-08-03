import React, { useState, useEffect } from 'react';
import SortField from '../../Components/SortField/SortField.js';
import HeroCard from '../../Components/HeroCard/HeroCard.js';
import serverRequests from '../../utils/back-end-service.js';
import styles from './AdminHome.module.css';




const AdminHome = () => {
    const [characters, changeChars] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await serverRequests.GET('/characters/admin');
            changeChars(data);
        }
        getData();
    }, []);
    if (characters.length < 1) {
        return (
            <div className={styles.noChars}>Sorry there arent any characters to check! Come back later!</div>
        )
    }
    return (
        <>
            <SortField />
            {characters.map(character => { return (<HeroCard key={character._id} {...character} />) })}
        </>
    )

}

export default AdminHome;