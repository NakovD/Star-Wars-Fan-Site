import React from 'react';
import CharFormBody from '../../Components/CharacterForm/CharFormBody.js';
import InputField from '../../Components/Auth/InputField.js';
import PopUp from '../../Components/PopUp/PopUp.js';


const EditCharacterPage = () => {

    return (
        <CharFormBody headingText="Request an edit, now!" btnText="Request an edit!">
            <InputField type="text" usedFor='Name' />
            <InputField type="text" usedFor='Era' />
            <InputField type="text" usedFor='Factions' />
            <PopUp text="Separate them with comma and space!" />
            <label>Species:</label>
            <select name="species" htmlFor="species">species
                        <option>Human</option>
                <option>Twi leks</option>
                <option>Togruta</option>
            </select>
            <InputField type="text" usedFor='Image Link' />
            <PopUp text="Please provide picture in portrait orientation!" />
        </CharFormBody>
    )
}

export default EditCharacterPage;