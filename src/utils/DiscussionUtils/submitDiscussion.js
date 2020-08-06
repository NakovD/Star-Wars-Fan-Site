import {
    createDisc,
    editDisc
} from './dbOperations.js';
import discussionValidator from './discussionValidator.js';

const create = async (e, changeMethod, discussion, userId, onSucc) => {
    e.preventDefault();
    const check = discussionValidator(discussion);

    if (check.error) { return changeMethod({ ...discussion, err: check.message }); }

    const createDiscussion = await createDisc(discussion, userId);

    if (createDiscussion.error) { return changeMethod({ ...discussion, err: createDiscussion.message }); }

    onSucc();
}

const update = async (e, changeMethod, discussion, userId, onSucc) => {
    e.preventDefault();
    const check = discussionValidator(discussion);
    if (check.error) { return changeMethod({ ...discussion, err: check.message }) };

    const updateDiscussion = await editDisc(discussion, userId);

    if (updateDiscussion.error) { return changeMethod({ ...discussion, err: updateDiscussion.message }) };
    
    onSucc();
}

export {
    create,
    update
}