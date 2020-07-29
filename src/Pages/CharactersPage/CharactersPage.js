import React, { useEffect, useState } from 'react';
import SortField from '../../Components/SortField/SortField.js';
import HeroCard from '../../Components/HeroCard/HeroCard.js';
import serverRequests from '../../utils/back-end-service.js';



const CharactersPage = () => {
    const [characters, changeChars] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await serverRequests.GET('characters');
            changeChars(data);
        }
        getData();
    }, []);
    
    return (
        <>
            <SortField />
            {characters.map(character => {return (<HeroCard key={character._id} {...character}/>)})}
        </>
    );
}

export default CharactersPage;