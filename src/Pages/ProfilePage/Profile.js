import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Discussions from '../../Components/Profile/Discussions.js';
import Settings from '../../Components/Profile/Settings.js';
import ProfileBody from '../../Components/Profile/ProfileBody.js';
import serverRequests from '../../utils/back-end-service.js';
import changeSideHandler from '../../utils/changeSide.js';
import changeProfileIMG from '../../utils/changeProfilePic.js';
import authContext from '../../Context.js';

const ProfilePage = (props) => {
    const authInfo = useContext(authContext);
    const { userId } = useParams();
    const [userData, changeData] = useState({});
    const [changedSide, changeSide] = useState('');
    const [imgLink, changeImgLink] = useState('');
    const [dataChanged, setChangedData] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userInfo = await serverRequests.GET(`user/${userId}`);
                changeData(userInfo);
                changeSide(userInfo.side);
            } catch (error) {
                console.log(error.message);
            }

        }
        fetchData();
    }, [userId, dataChanged]);


    return (
        <ProfileBody userInfo={userData}>
            <h3>Rank:</h3>
            <p>rank icon vader himself</p>
            <Discussions discussions={userData.discussionsStarted}></Discussions>
            {(userData._id === authInfo.userInfo.userId) ? (<Settings
                currentSide={userData.side}
                imgLink={imgLink}
                onChangeSide={e => changeSide(e.target.value)}
                changeSide={e => changeSideHandler(changedSide, userData.side, userData._id, setChangedData)}
                onChangeImg={e => changeImgLink(e.target.value)}
                changeIMG={e => changeProfileIMG(imgLink, userData._id, setChangedData, changeImgLink)}
            />) : null}
        </ProfileBody>
    )
}


export default ProfilePage;