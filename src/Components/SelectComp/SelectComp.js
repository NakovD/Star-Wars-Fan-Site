import React from 'react';


const SelectComp = (props) => {

    return (
        <>
            <label>{props.label}</label>
            <select name={props.selectName} defaultValue={props.defaultValue} onBlur={props.onBlur} onChange={props.onChange}>
                {props.children}
            </select>
        </>
    )
}

export default SelectComp;