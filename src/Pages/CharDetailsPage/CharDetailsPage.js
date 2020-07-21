import React, { useState, useEffect } from 'react';
import HeroDetails from '../../Components/HeroDetails/HeroDetails.js';
import serverRequests from '../../utils/back-end-service.js';


const CharDetailsPage = (props) => {
    const idChar = props.match.params.id;
    const [charDetails, changeDetails] = useState({});

    useEffect(() => {
        const getInfo = async () => {
            const charInfo = await serverRequests.GET(`http://localhost:3001/api/character/${idChar}`);
            changeDetails(charInfo);
        }
        getInfo();
    },[]);
    
    return (
        <HeroDetails {...charDetails}/>
    )
}

export default CharDetailsPage;