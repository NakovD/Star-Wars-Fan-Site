import React from 'react';
import './CharacterForm.css';
import PopUp from '../PopUp/PopUp.js';
import InputField from '../Auth/InputField.js';


const CharacterForm = ({ type }) => {
    let headingText = '';
    let buttonText = '';
    if (type === 'create') {
        headingText = 'Create a new character!';
        buttonText = 'Submit';
    } else if (type === 'edit') {
        headingText = 'Request an edit for a character!';
        buttonText = 'Request an edit!';
    }
    return (
        <section id="charForm">
            <h2>{headingText}</h2>
            <div className="container">
                <form name="htmlform" method="POST" action="">
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
                    <textarea name="description" placeholder="Description" required></textarea>
                    <button name="send" type="submit" className="submit">{buttonText}</button>
                </form>
            </div>
        </section>
    )
}

export default CharacterForm;