import React, { useState } from 'react';
import CharFormBody from '../../Components/CharacterForm/CharFormBody.js';
import InputField from '../../Components/Auth/InputField.js';
import InputSubmit from '../../Components/Auth/InputSubmit.js';
import PopUp from '../../Components/PopUp/PopUp.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js';
import discussionValidator from '../../utils/discussionValidator.js';
import createDisc from '../../utils/createDiscussion.js';



const CreateDiscussionPage = (props) => {

    const [discussion, changeDiscussion] = useState({
        title: '',
        description: '',
        err: false
    });

    const submitDiscussion = async (e) => {
        e.preventDefault();
        const check = discussionValidator(discussion);
        if (check.error) {
            changeDiscussion({ ...discussion, err: check.message });
            return;
        }
        const createDiscussion = await createDisc(discussion);
        if (createDiscussion.error) {
            changeDiscussion({ ...discussion, err: createDiscussion.message });
            return;
        }
        props.history.push('/forum');
    }

    return (
        <CharFormBody headingText="Create a discussion and talk with others!" onSubmit={e => submitDiscussion(e)}>
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