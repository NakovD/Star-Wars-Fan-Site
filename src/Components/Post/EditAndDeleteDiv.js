import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../Components/Button/Button.js';
import styles from './EditAndDeleteDiv.module.css';
import { deleteDisc } from '../../utils/discussionUtils/dbOperations.js';

const EditDiscussion = ({ discId, userId }) => {
    const history = useHistory();

    return (
        <div className={styles.edit}>
            <Button text="Edit discussion" href={`/editDisc/${discId}`} link={true} />
            <Button text="Delete discussion" onClick={e => deleteDisc(discId, userId, history)} link={false} />
        </div>
    );
}


export default EditDiscussion;