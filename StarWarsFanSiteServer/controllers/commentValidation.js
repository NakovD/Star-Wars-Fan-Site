
const commentValidate = (creator, commentContent, discussion) => {
    const errObj = { error: null, message: null };
    if (!creator) {
        errObj.error = true;
        errObj.message = 'Every comment should have a creator!';
        return errObj;
    }
    if (!commentContent || commentContent.length < 3) {
        errObj.error = true;
        errObj.message = 'Comment text should be at least 3 symbols!';
        return errObj;
    }
    if (!discussion) {
        errObj.error = true;
        errObj.message = 'Every comment should have a discussion!';
        return errObj;
    }
    errObj.error = false;
    return errObj;
}

module.exports = commentValidate;