import React from 'react';
import Button from '../Button/Button.js';
import './SortField.css';



const SortField = () => {

    return(
        <div className="sortField">
            <p>Sort</p>
            <Button href="/somewhere" text="Sith"/>
            <Button href="/somewhere" text="Jedi"/>
            <Button href="/somewhere" text="Rebel"/>
            <Button href="/somewhere" text="Empire"/>
            <Button href="/somewhere" text="Resistance"/>
            <Button href="/somewhere" text="First Order"/>
            <Button href="/somewhere" text="Old Republic"/>
            <Button href="/somewhere" text="Galactic Republic"/>
        </div>
    )
}


export default SortField;