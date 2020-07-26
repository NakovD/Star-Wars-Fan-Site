

const validator = (field, authData) => {
    const validations = {
        'username': function (authData) {
            if (authData.username.length < 5) {

                return {
                    error: true,
                    message: 'Username must be at least 5 characters long!'
                }
            }
        },
        'password': function (authData) {
            if (authData.password.length < 6) {
                return {
                    error: true,
                    message: 'Password must be at least 6 characters long!'
                }
            }
        },
        'repeatPassword': function (authData) {
            if (authData.repeatPassword.length < 6) {
                return {
                    error: true,
                    message: 'Password must be at least 6 characters long!'
                }
            } else if (authData.repeatPassword !== authData.password) {
                return {
                    error: true,
                    message: 'Passwords must match!'
                }
            }
        }
    }
    if (!validations[field](authData)) {
        return {
            error: false
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
        }
    }
    return typeValidator[submitFor](authData);

}

export {
    validator,
    submitValidator
};
