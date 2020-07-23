

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
            }else if (authData.repeatPassword !== authData.password) {
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

const submitValidator = (authData) => {
    if (authData.usernameErr || authData.passwordErr || authData.repeatPasswordErr) {
        return {
            error: true,
            message: 'There is an error, brother!'
        };
    } else {
        if (!authData.username || !authData.password || !authData.repeatPassword || !authData.side) {
            return {
                error: true,
                message: 'Fields must not be empty(you may have forgotten to choose a side)!'
            };
        }
        return {
            error: false
        }
    }
}

export {
    validator,
    submitValidator
};
