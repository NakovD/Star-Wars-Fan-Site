import React, { useState, useContext } from 'react';
import HeroDetailsBody from '../../Components/HeroDetails/HeroDetailsBody.js';
import HeroContent from '../../Components/HeroDetails/HeroContent.js';
import RequestAnEditDiv from '../../Components/HeroDetails/RequestAnEditDiv.js';
import useFetchData from '../../utils/customHooks/customHooks.js';
import AuthContext from '../../Context.js';


const CharDetailsPage = (props) => {
    const authInfo = useContext(AuthContext);
    const idChar = props.match.params.id;
    const [charDetails, changeDetails] = useState({});

    useFetchData(`character/${idChar}`, changeDetails);

    return (
        <HeroDetailsBody img={charDetails.imgURL}>

            <HeroContent {...charDetails} />
            {(authInfo.loggedIn === 'regular') ? (<RequestAnEditDiv typeUser="regular" _id={charDetails._id} />) : null}

        </HeroDetailsBody>
    )
}

export default CharDetailsPage;