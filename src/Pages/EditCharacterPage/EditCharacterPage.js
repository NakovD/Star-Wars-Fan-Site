import React, { useEffect, useState } from 'react';
import CharFormBody from '../../Components/CharacterForm/CharFormBody.js';
import InputField from '../../Components/Auth/InputField.js';
import InputSubmit from '../../Components/Auth/InputSubmit.js';
import PopUp from '../../Components/PopUp/PopUp.js';
import SelectComp from '../../Components/SelectComp/SelectComp.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js';
import charValidator from '../../utils/characterValidator.js';
import serverRequests from '../../utils/back-end-service.js';
import createCharacter from '../../utils/characterDbSave.js';



const EditCharacterPage = (props) => {
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
            const charInfo = await serverRequests.GET(`http://localhost:3001/api/character/${idChar}`);
            changeDetails(charInfo);
            changeDetails({ ...charInfo, err: false })
        }
        getData();
    }, [idChar]);

    const submitForm = async (e) => {
        e.preventDefault();
        const check = charValidator(charDetails);
        if (check.error) {
            changeDetails({ ...charDetails, err: check.message });
            return;
        }
        const createChar = await createCharacter(charDetails);
        if (createChar.error) {
            changeDetails({ ...charDetails, err: createChar.message });
            return;
        }
        props.history.push('/characters');
    }

    return (
        <CharFormBody headingText="Request an edit, now!" onSubmit={e => submitForm(e)} btnText="Request an edit!">
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
            <InputSubmit value="Request an edit!" />
            {charDetails.err ? (<ErrNotification error={charDetails.err} />) : null}
        </CharFormBody>
    )
}

export default EditCharacterPage;