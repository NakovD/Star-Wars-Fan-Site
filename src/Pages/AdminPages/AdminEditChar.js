import React, { useEffect, useState } from 'react';
import CharFormBody from '../../Components/CharacterForm/CharFormBody.js';
import InputField from '../../Components/Auth/InputField.js';
import PopUp from '../../Components/PopUp/PopUp.js';
import SelectComp from '../../Components/SelectComp/SelectComp.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js';
import charValidator from '../../utils/characterValidator.js';
import styles from './AdminEditChar.module.css';
import serverRequests from '../../utils/back-end-service.js';
import characterOperations from '../../utils/characterDbSave.js';
import deleteChar from '../../utils/deleteChar.js';


const AdminEditChar = (props) => {
    const idChar = props.match.params.id;
    const [charDetails, changeDetails] = useState({
        name: '',
        era: '',
        factions: '',
        species: '',
        imgURL: '',
        description: '',
        err: false
    });
    
    useEffect(() => {
        const getData = async () => {
            const charInfo = await serverRequests.GET(`/character/adminOnly/${idChar}`);
            changeDetails(charInfo);
            changeDetails({ ...charInfo, err: false })
        }
        getData();
    }, [idChar]);

    const submitForm = async () => {
        const check = charValidator(charDetails);
        if (check.error) {
            changeDetails({ ...charDetails, err: check.message });
            return;
        }

        const approveCharacter = await characterOperations('approveChar', charDetails);
        if (approveCharacter.error) {
            changeDetails({ ...charDetails, err: approveCharacter.message });
            return;
        }
        props.history.push('/adminOnly/characters');
    }

    const deleteCharHandler = async () => {
        const deleteChar_ = await deleteChar(idChar);
        if (deleteChar_.error) {
            changeDetails({ ...charDetails, err: deleteChar_.message });
            return;
        }
        props.history.push('/adminOnly/characters');
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
            <SelectComp label="Species:" selectName="species" onChange={e => changeDetails({ ...charDetails, species: e.target.value })}>
                <option value="Human">Human</option>
                <option value="Twi-leks">Twi'leks</option>
                <option value="Togruta">Togruta</option>
                <option value="Nightsister">Nightsister</option>
                <option value="Zabrak">Zabrak</option>
                <option value="Wookie">Wookie</option>
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
            <button type='button' onClick={e => submitForm()} className={styles.adminBtn} >Approve?</button>
            <p className={styles.or}>Or</p>
            <button type='button' onClick={e => deleteCharHandler()} className={styles.adminBtn} >Disapprove?</button>
            {charDetails.err ? (<ErrNotification error={charDetails.err} />) : null}
        </CharFormBody>
    )
}

export default AdminEditChar;