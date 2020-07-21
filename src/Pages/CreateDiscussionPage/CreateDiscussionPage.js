import React from 'react';
import CharFormBody from '../../Components/CharacterForm/CharFormBody.js';
import InputField from '../../Components/Auth/InputField.js';
import PopUp from '../../Components/PopUp/PopUp.js';



const CreateDiscussionPage = () => {

    return (
        <CharFormBody headingText="Create a discussion and talk with others!" btnText="create?">
            <InputField type="text" usedFor='Title' value=''/>
            <PopUp text="Keep the title simple! Put most of your information in the description!"/>
        </CharFormBody>
    )
}

export default CreateDiscussionPage;