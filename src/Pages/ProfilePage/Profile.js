import React from 'react';
import Discussions from '../../Components/Profile/Discussions.js';
import Settings from '../../Components/Profile/Settings.js';
import ProfileBody from '../../Components/Profile/ProfileBody.js';




const ProfilePage = () => {


    return (
        <ProfileBody >
            <h3>Rank:</h3>
            <p>rank icon vader himself</p>
            <Discussions></Discussions>
            
            <Settings></Settings>
        </ProfileBody>
    )
}


export default ProfilePage;