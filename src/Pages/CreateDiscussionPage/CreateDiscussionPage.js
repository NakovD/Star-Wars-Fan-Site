import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import CharFormBody from '../../Components/CharacterForm/CharFormBody.js';
import InputField from '../../Components/Auth/InputField.js';
import InputSubmit from '../../Components/Auth/InputSubmit.js';
import PopUp from '../../Components/PopUp/PopUp.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js';
import { create } from '../../utils/discussionUtils/submitDiscussion.js';
import AuthContext from '../../Context.js';



const CreateDiscussionPage = () => {
    const authInfo = useContext(AuthContext);
    const history = useHistory();
    const [discussion, changeDiscussion] = useState({
        title: '',
        description: '',
        err: false
    });
    const onSucc = () => {
        history.push('/forum');
    }

    return (
        <CharFormBody headingText="Create a discussion and talk with others!"
            onSubmit={e => create(e, changeDiscussion, discussion, authInfo.userInfo.userId, onSucc)}>
            <InputField
                type="text"
                usedFor='Title'
                value={discussion.title}
                onChange={e => changeDiscussion({ ...discussion, title: e.target.value })} />
            <PopUp text="Keep the title simple! Put most of your information in the description!" />
            <textarea
                name="description"
                placeholder="Description"
                value={discussion.description}
                onChange={e => changeDiscussion({ ...discussion, description: e.target.value })}
                required></textarea>
            <InputSubmit value="Create a discussion?" />
            {discussion.err ? (<ErrNotification error={discussion.err} />) : null}
        </CharFormBody>
    )
}

export default CreateDiscussionPage;