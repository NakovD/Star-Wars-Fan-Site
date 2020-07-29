import React, { useState, useEffect, useContext } from 'react';
import HeroDetailsBody from '../../Components/HeroDetails/HeroDetailsBody.js';
import HeroContent from '../../Components/HeroDetails/HeroContent.js';
import RequestAnEditDiv from '../../Components/HeroDetails/RequestAnEditDiv.js';
import serverRequests from '../../utils/back-end-service.js';
import AuthContext from '../../Context.js';


const CharDetailsPage = (props) => {
    const authInfo = useContext(AuthContext);
    const idChar = props.match.params.id;
    const [charDetails, changeDetails] = useState({});

    useEffect(() => {
        const getInfo = async () => {
            const charInfo = await serverRequests.GET(`character/${idChar}`);
            changeDetails(charInfo);
        }
        getInfo();
    }, [idChar]);

    return (
        <HeroDetailsBody img={charDetails.imgURL}>

            <HeroContent {...charDetails} />
            {(authInfo.loggedIn === 'regular') ? (<RequestAnEditDiv typeUser="regular" _id={charDetails._id} />) : null}

        </HeroDetailsBody>
    )
}

export default CharDetailsPage;