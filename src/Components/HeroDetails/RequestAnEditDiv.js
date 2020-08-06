import React from 'react';
import Button from '../Button/Button.js';
import styles from './RequestAnEditDiv.module.css';


const RequestAnEditDiv = ({ _id, typeUser }) => {

    let textLabel = '';
    let buttonText = '';
    let href = '';
    if (typeUser === 'admin') {
        buttonText = 'Check?';
        href = `/adminOnly/edit/${_id}`;
        textLabel = 'Check the info carefully, please! If there is not a character like this in the Star Wars universe, DONT approve it!';
    } else if (typeUser === 'regular') {
        buttonText = 'Request an edit!';
        href = `/editChar/${_id}`;
        textLabel = 'You think the information is not correct or not complete? Request and edit now!';
    }

    return (
        <div className={styles.proposeEdit} >
            <p>{textLabel}</p>
            <Button href={href} text={buttonText} link={true} />
        </div>
    )
}

export default RequestAnEditDiv;