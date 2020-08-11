import React from 'react';
import { useHistory } from 'react-router-dom';
import CharFormBody from '../../Components/CharacterForm/CharFormBody.js';
import InputField from '../../Components/Auth/InputField.js';
import PopUp from '../../Components/PopUp/PopUp.js';
import SelectComp from '../../Components/SelectComp/SelectComp.js';
import InputSubmit from '../../Components/Auth/InputSubmit.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js';
import { submitCharData } from '../../utils/characterUtils/submitCharacterData.js';
import speciesOptions from '../../utils/otherUtils/speciesFactory.js';
import { useDetails } from '../../utils/customHooks/customHooks.js';


const CreateCharacterPage = () => {
    const history = useHistory();
    const [charInfo, changeDetails] = useDetails();

    const onSucc = () => { history.push('/thanksSucka') };

    return (
        <CharFormBody headingText="Create a character, now!"
            onSubmit={e => submitCharData(e, charInfo, changeDetails, 'createChar', onSucc)} btnText="Create!">
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
                {speciesOptions}
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