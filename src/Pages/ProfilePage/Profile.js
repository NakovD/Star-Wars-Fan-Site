import React, { useEffect, useState, useContext } from 'react';
import Discussions from '../../Components/Profile/Discussions.js';
import Settings from '../../Components/Profile/Settings.js';
import ProfileBody from '../../Components/Profile/ProfileBody.js';
import serverRequests from '../../utils/back-end-service.js';
import authContext from '../../Context.js';

const ProfilePage = (props) => {
    const authInfo = useContext(authContext);
    const userId = props.match.params.id;
    const [userData, changeData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userInfo = await serverRequests.GET(`user/${userId}`);
                changeData(userInfo);
            } catch (error) {
                console.log(error.message);
            }

        }
        fetchData();
    }, [userId, userData]);

    return (
        <ProfileBody userInfo={userData}>
            <h3>Rank:</h3>
            <p>rank icon vader himself</p>
            <Discussions discussions={userData.discussionsStarted}></Discussions>
            {(userData._id === authInfo.userInfo.userId) ? (<Settings userId={userId} side={userData.side} />) : null}
        </ProfileBody>
    )
}


export default ProfilePage;