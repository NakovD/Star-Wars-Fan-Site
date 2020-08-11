import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import CharFormBody from '../../Components/CharacterForm/CharFormBody.js';
import InputField from '../../Components/Auth/InputField.js';
import PopUp from '../../Components/PopUp/PopUp.js';
import SelectComp from '../../Components/SelectComp/SelectComp.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js';
import styles from './AdminEditChar.module.css';
import serverRequests from '../../utils/back-end-service.js';
import {
    submitCharData,
    deleteCharHandler
} from '../../utils/characterUtils/submitCharacterData.js';
import species from '../../utils/otherUtils/speciesFactory.js';
import { useDetails } from '../../utils/customHooks/customHooks.js';


const AdminEditChar = () => {
    const history = useHistory();
    const { idChar } = useParams();
    const [charDetails, changeDetails] = useDetails();
    useEffect(() => {
        const getData = async () => {
            const charInfo = await serverRequests.GET(`/character/adminOnly/${idChar}`);
            changeDetails({ ...charInfo, err: false })
        }
        getData();
        console.log('execute');
    }, [idChar, changeDetails]);

    const onSucc = () => {
        history.push('/adminOnly/characters');
    }


    return (
        <CharFormBody headingText="Approve or disapprove, now!">
            <InputField
                type="text"
                usedFor='Name'
                value={charDetails.name}
                onChange={e => changeDetails({ ...charDetails, name: e.target.value })} />
            <InputField
                type="text"
                usedFor='Era'
                value={charDetails.era}
                onChange={e => changeDetails({ ...charDetails, era: e.target.value })} />
            <InputField
                type="text"
                usedFor='Factions'
                value={charDetails.factions}
                onChange={e => changeDetails({ ...charDetails, factions: e.target.value })} />
            <PopUp text="Separate them with comma and space!" />
            <SelectComp label="Species:" value={charDetails.species} selectName="species" onChange={e => changeDetails({ ...charDetails, species: e.target.value })}>
                {species}
            </SelectComp>
            <InputField
                type="text"
                usedFor='Image Link'
                value={charDetails.imgURL}
                onChange={e => changeDetails({ ...charDetails, imgURL: e.target.value })} />
            <PopUp text="Please provide picture in portrait orientation!" />
            <textarea
                name="description"
                placeholder="Description"
                value={charDetails.description}
                onChange={e => changeDetails({ ...charDetails, description: e.target.value })}
                required></textarea>
            <button
                type='button'
                onClick={e => submitCharData(e, charDetails, changeDetails, 'approveChar', onSucc)}
                className={styles.adminBtn} >Approve?</button>
            <p className={styles.or}>Or</p>
            <button
                type='button'
                onClick={e => deleteCharHandler(idChar, onSucc, changeDetails, charDetails)}
                className={styles.adminBtn} >Disapprove?</button>
            {charDetails.err ? (<ErrNotification error={charDetails.err} />) : null}
        </CharFormBody>
    )
}

export default AdminEditChar;