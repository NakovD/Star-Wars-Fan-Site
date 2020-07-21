import React from 'react';


const InputField = ({ type, usedFor, value }) => {
    return (
        <input type={type} id={usedFor.toLowerCase()} defaultValue={value} name={usedFor} placeholder={usedFor} />
    )
}

export default InputField;