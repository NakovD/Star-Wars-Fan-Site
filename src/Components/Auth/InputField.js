import React from 'react';


const InputField = ({ type, usedFor, value }) => {
    if (usedFor === 'Repeat password') {
        return (
            <input type={type} id="repeatPassword" defaultValue={value} name="repeatPassword" placeholder={usedFor} />
        );
    }else if (usedFor === 'Secret Code') {
        return (
            <input type={type} id="secretCode" defaultValue={value} name="secretCode" placeholder={usedFor} />
        )
    }
    return (
        <input type={type} id={usedFor.toLowerCase()} defaultValue={value} name={usedFor.toLowerCase()} placeholder={usedFor} />
    )
}

export default InputField;