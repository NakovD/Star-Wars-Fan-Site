import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Discussions from '../../Components/Profile/Discussions.js';
import Settings from '../../Components/Profile/Settings.js';
import ProfileBody from '../../Components/Profile/ProfileBody.js';
import authContext from '../../Context.js';
import { useFetchData } from '../../utils/customHooks/customHooks.js';
import getRank from '../../utils/otherUtils/ranks.js';

const ProfilePage = () => {
    const authInfo = useContext(authContext);
    const { userId } = useParams();
    const [userData, changeData] = useState({});
    const [dataChanged, changeFlag] = useState(false);

    useFetchData(`user/${userId}`, changeData, [userId, dataChanged]);
    const rank = getRank(userData.side, userData.discussionsStarted);


    return (
        <ProfileBody userInfo={userData}>
            <h3>Rank:</h3>
            <span className={`swg ${rank ? rank.icon : null} swg-3x`}></span>
            <p>{rank ? rank.text : ''}</p>
            <Discussions discussions={userData.discussionsStarted}></Discussions>
            {(userData._id === authInfo.userInfo.userId) ? (<Settings
                changeMethod={changeFlag}
                userId={userId}
                currentSide={userData.side}
            />) : null}
        </ProfileBody>
    )
}


export default ProfilePage;