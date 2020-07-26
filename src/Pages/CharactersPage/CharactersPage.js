import React, { useEffect, useState, useContext } from 'react';
import SortField from '../../Components/SortField/SortField.js';
import HeroCard from '../../Components/HeroCard/HeroCard.js';
import serverRequests from '../../utils/back-end-service.js';
import authContext from '../../Context.js';




const CharactersPage = () => {
    const authInfo = useContext(authContext);
    const [characters, changeChars] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await serverRequests.GET('http://localhost:3001/api/characters');
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