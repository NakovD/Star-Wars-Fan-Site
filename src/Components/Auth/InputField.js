import React from 'react';
import ErrorNotification from '../ErrorNot/ErrorNotification.js';


const InputField = ({ type, usedFor, value, onChange, onBlur, error }) => {
    const namesWithSpaces = {
        'Repeat password': 'repeatPassword',
        'Secret Code': 'secretCode',
        'Image Link': 'imageURL'
    }
    let name = '';
    if (namesWithSpaces[usedFor]) {
        name = namesWithSpaces[usedFor];
    } else {
        name = usedFor.toLowerCase();
    }
    return (
        <>
            <input type={type} value={value} id={name} onChange={onChange} onBlur={onBlur} name={name} placeholder={usedFor} />
            {error ? (<ErrorNotification error={error} />) : null}
        </>
    )
}

export default InputField;