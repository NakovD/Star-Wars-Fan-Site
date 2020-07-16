import React from 'react';
import Button from '../Button/Button.js';
import './SortField.css';



const SortField = () => {

    return(
        <div className="sortField">
            <p>Sort</p>
            <Button text="Sith"/>
            <Button text="Jedi"/>
            <Button text="Rebel"/>
            <Button text="Empire"/>
            <Button text="Resistance"/>
            <Button text="First Order"/>
            <Button text="Old Republic"/>
            <Button text="Galactic Republic"/>
        </div>
    )
}


export default SortField;