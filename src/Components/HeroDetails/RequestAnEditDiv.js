import React from 'react';
import Button from '../Button/Button.js';
import styles from './RequestAnEditDiv.module.css';


const RequestAnEditDiv = ({ _id }) => {


    return (
        <div className={styles.proposeEdit} >
            <p>You think the information is not correct or not complete? Request and edit now!</p>
            <Button href={`/edit/${_id}`} text="Request an edit!" />
        </div>
    )
}

export default RequestAnEditDiv;