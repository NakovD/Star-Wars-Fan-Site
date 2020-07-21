import React, { useEffect, useState } from 'react';
import CharFormBody from '../../Components/CharacterForm/CharFormBody.js';
import InputField from '../../Components/Auth/InputField.js';
import PopUp from '../../Components/PopUp/PopUp.js';
import serverRequests from '../../utils/back-end-service.js';


const EditCharacterPage = (props) => {
    const idChar = props.match.params.id;
    const [charDetails, changeDetails] = useState({});

    useEffect(() => {
        const getInfo = async () => {
            const charInfo = await serverRequests.GET(`http://localhost:3001/api/character/${idChar}`);
            changeDetails(charInfo);
        }
        getInfo();
    }, [])

    return (
        <CharFormBody description={charDetails.description} headingText="Request an edit, now!" btnText="Request an edit!">
            <InputField type="text" usedFor='Name' value={charDetails.name} />
            <InputField type="text" usedFor='Era' value={charDetails.era} />
            <InputField type="text" usedFor='Factions' value={!charDetails.factions ? '' : charDetails.factions.join(', ')} />
            <PopUp text="Separate them with comma and space!" />
            <label>Species:</label>
            <select name="species" htmlFor="species">
                <option>Human</option>
                <option>Twi leks</option>
                <option>Togruta</option>
            </select>
            <InputField type="text" usedFor='Image Link' value={charDetails.imgURL} />
            <PopUp text="Please provide picture in portrait orientation!" />
        </CharFormBody>
    )
}

export default EditCharacterPage;