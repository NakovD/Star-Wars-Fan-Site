

const validator = (field, authData, onErr, noErr) => {
    const validations = {
        'username': function (authData) {
            if (authData.username.length < 5) {
                const message = 'Username must be at least 5 characters long!';
                return onErr(message, field);
            }
            return noErr(field);
        },
        'password': function (authData) {
            if (authData.password.length < 6) {
                const message = 'Password must be at least 6 characters long!';
                return onErr(message, field);
            }
            return noErr(field);
        },
        'repeatPassword': function (authData) {
            let message = ''
            if (authData.repeatPassword.length < 6) {
                message = 'Password must be at least 6 characters long!';
                return onErr(message, field);
            } else if (authData.repeatPassword !== authData.password) {
                message = 'Passwords must match!';
                return onErr(message, field);
            }
            return noErr(field);
        }
    }
    return validations[field](authData);
}

const submitValidator = (authData, submitFor) => {
    const typeValidator = {
        'register': function (authData) {
            const errObj = { error: null, message: null };
            if (authData.usernameErr || authData.passwordErr || authData.repeatPasswordErr) {
                errObj.error = true;
                errObj.message = 'There is an error, brother!'
                return errObj;
            }
            if (!authData.username || !authData.password || !authData.repeatPassword || !authData.side) {
                errObj.error = true;
                errObj.message = 'Fields must not be empty(You may have forgotten to choose a side!)';
                return errObj;
            }
            errObj.error = false;
            return errObj;
        },
        'login': function (authData) {
            const errObj = { error: null, message: null };
            if (!authData.username || !authData.password) {
                errObj.error = true;
                errObj.message = 'Please fill all fields!';
                return errObj;
            }
            errObj.error = false;
            return errObj;
        },
        'admin/register': function (authData) {
            const errObj = { error: null, message: null };
            if (authData.usernameErr || authData.passwordErr || authData.repeatPasswordErr) {
                errObj.error = true;
                errObj.message = 'There is an error, brother!'
                return errObj;
            }
            if (!authData.username || !authData.password || !authData.repeatPassword) {
                errObj.error = true;
                errObj.message = 'Please fill all fields!';
                return errObj;
            }
            errObj.error = false;
            return errObj;
        }
    }
    return typeValidator[submitFor](authData);

}

export {
    validator,
    submitValidator
};
