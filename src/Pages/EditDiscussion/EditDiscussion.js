import React, { useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import CharFormBody from '../../Components/CharacterForm/CharFormBody.js';
import InputField from '../../Components/Auth/InputField.js';
import InputSubmit from '../../Components/Auth/InputSubmit.js';
import PopUp from '../../Components/PopUp/PopUp.js';
import ErrNotification from '../../Components/ErrorNot/ErrorNotification.js';
import { update } from '../../utils/discussionUtils/submitDiscussion.js';
import useFetchData from '../../utils/customHooks/customHooks.js';
import AuthContext from '../../Context.js';



const EditDiscussion = () => {
    const authInfo = useContext(AuthContext);
    const history = useHistory();
    const { discId } = useParams();
    const [discussion, changeDiscussion] = useState({
        title: '',
        description: '',
        err: false,
        discussionId: discId
    });
    useFetchData(`post/${discId}`, changeDiscussion);

    const onSucc = () => {
        history.push(`/discussion/${discId}`);
    }

    return (
        <CharFormBody headingText="Edit your discussion!"
            onSubmit={e => update(e, changeDiscussion, discussion, authInfo.userInfo.userId, onSucc)}>
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
            <InputSubmit value="Edit your discussion?" />
            {discussion.err ? (<ErrNotification error={discussion.err} />) : null}
        </CharFormBody>
    )
}

export default EditDiscussion;