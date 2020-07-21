import React, { useState, useEffect } from 'react';
import HeroDetailsBody from '../../Components/HeroDetails/HeroDetailsBody.js';
import HeroContent from '../../Components/HeroDetails/HeroContent.js';
import RequestAnEditDiv from '../../Components/HeroDetails/RequestAnEditDiv.js';
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
    }, []);

    return (
        <HeroDetailsBody img={charDetails.imgURL}>

            <HeroContent {...charDetails} />
            <RequestAnEditDiv _id={charDetails._id} />
        </HeroDetailsBody>
    )
}

export default CharDetailsPage;