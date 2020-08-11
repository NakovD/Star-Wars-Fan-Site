import React, { useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import CharFormBody from '../../Components/CharacterForm/CharFormBody.js';
import InputField from '../../Components/Auth/InputField.js';
import InputSubmit from '../../Components/Auth/InputSubmit.js';
import PopUp from '../../Components/PopUp/PopUp.js';
import SelectComp from '../../Components/SelectComp/SelectComp.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js';
import serverRequests from '../../utils/back-end-service.js';
import { submitCharData } from '../../utils/characterUtils/submitCharacterData.js';
import speciesOptions from '../../utils/otherUtils/speciesFactory.js';
import { useDetails } from '../../utils/customHooks/customHooks.js';

const EditCharacterPage = () => {
    const { idChar } = useParams();
    const history = useHistory();
    const [charDetails, changeDetails] = useDetails();
    useEffect(() => {
        const getData = async () => {
            const charInfo = await serverRequests.GET(`character/${idChar}`);
            changeDetails({ ...charInfo, err: false });
        }
        getData();
    }, [idChar, changeDetails]);
    const onSucc = () => {
        history.push('/thanksSucka');
    }

    return (
        <CharFormBody headingText="Request an edit, now!"
            onSubmit={e => submitCharData(e, charDetails, changeDetails, 'createChar', onSucc)} btnText="Request an edit!">
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
                {speciesOptions}
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