import React, { useState, useEffect } from 'react';
import HeroDetailsBody from '../../Components/HeroDetails/HeroDetailsBody.js';
import HeroContent from '../../Components/HeroDetails/HeroContent.js';
import RequestAnEditDiv from '../../Components/HeroDetails/RequestAnEditDiv.js';
import serverRequests from '../../utils/back-end-service.js';


const AdminCharDetails = (props) => {
    const idChar = props.match.params.id;
    const [charDetails, changeDetails] = useState({});
    useEffect(() => {
        const getInfo = async () => {
            const charInfo = await serverRequests.GET(`/character/adminOnly/${idChar}`);
            changeDetails(charInfo);
        }
        getInfo();
    }, [idChar]);

    return (
        <HeroDetailsBody img={charDetails.imgURL}>

            <HeroContent {...charDetails} />
            <RequestAnEditDiv typeUser="admin" _id={charDetails._id} />
        </HeroDetailsBody>
    )
}

export default AdminCharDetails;