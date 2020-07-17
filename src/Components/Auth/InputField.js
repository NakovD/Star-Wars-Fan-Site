import React from 'react';


const InputField = ({ type, usedFor}) => {
    return (
        <input type={type} id={usedFor.toLowerCase()} name={usedFor} placeholder={usedFor} />
    )
}

export default InputField;