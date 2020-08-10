
const postValidate = (title, description, creator) => {
    const errObj = { error: null, message: null };
    if (title.length < 5) {
        errObj.error = true;
        errObj.message = 'Title must be at least 5 characters long!';
        return errObj;
    }

    if (description.length < 20) {
        errObj.error = true;
        errObj.message = 'Description must be at least 20 characters long!';
        return errObj;
    }

    if (!creator) {
        errObj.error = true;
        errObj.message = 'Creator is required!';
        return errObj
    }

    errObj.error = false;
    return errObj;
}

module.exports = postValidate;