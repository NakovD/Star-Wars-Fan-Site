import React, { useState } from 'react';
import CharFormBody from '../../Components/CharacterForm/CharFormBody.js';
import InputField from '../../Components/Auth/InputField.js';
import PopUp from '../../Components/PopUp/PopUp.js';
import SelectComp from '../../Components/SelectComp/SelectComp.js';
import InputSubmit from '../../Components/Auth/InputSubmit.js';
import charValidator from '../../utils/characterValidator.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js';
import createCharacter from '../../utils/characterDbSave.js';


const CreateCharacterPage = (props) => {
    const [charInfo, changeDetails] = useState({
        name: '',
        era: '',
        factions: '',
        species: '',
        imgURL: '',
        description: '',
        err: false
    });

    const submitForm = async (e) => {
        e.preventDefault();
        const check = charValidator(charInfo);
        if (check.error) {
            changeDetails({ ...charInfo, err: check.message });
            return;
        }
        const createChar = await createCharacter(charInfo);
        if (createChar.error) {
            changeDetails({ ...charInfo, err: createChar.error });
            return;
        }
        props.history.push('/characters');
    }
    return (
        <CharFormBody headingText="Create a character, now!" onSubmit={e => submitForm(e)} btnText="Create!">
            <InputField
                type="text"
                usedFor='Name'
                value={charInfo.name}
                onChange={e => changeDetails({ ...charInfo, name: e.target.value })} />
            <InputField
                type="text"
                usedFor='Era'
                value={charInfo.era}
                onChange={e => changeDetails({ ...charInfo, era: e.target.value })} />
            <InputField
                type="text"
                usedFor='Factions'
                value={charInfo.factions}
                onChange={e => changeDetails({ ...charInfo, factions: e.target.value })} />
            <PopUp text="Separate them with comma and space!" />
            <SelectComp label="Species:" defaultValue='default' selectName="species" onChange={e => changeDetails({ ...charInfo, species: e.target.value })}>
                <option value="default" disabled hidden>Choose species</option>
                <option value="Human">Human</option>
                <option value="Twi-leks">Twi'leks</option>
                <option value="Togruta">Togruta</option>
                <option value="Nightsister">Nightsister</option>
                <option value="Zabrak">Zabrak</option>
                <option value="Wookie">Wookie</option>
                <option value="Unknown">Unknown(who knows what yoda is?!?)</option>
                <option value="Other">Other(I will check and add it myself)</option>
            </SelectComp>
            <InputField
                type="text"
                usedFor='Image Link'
                value={charInfo.imgURL}
                onChange={e => changeDetails({ ...charInfo, imgURL: e.target.value })}
            />
            <PopUp text="Please provide picture in portrait orientation!" />
            <textarea
                name="description"
                placeholder="Description"
                value={charInfo.description}
                onChange={e => changeDetails({ ...charInfo, description: e.target.value })}
                required></textarea>
            <InputSubmit value="Create character!" />
            {charInfo.err ? (<ErrNotification error={charInfo.err} />) : null}
        </CharFormBody>
    )
}

export default CreateCharacterPage;