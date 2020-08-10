const usernameAndPasswordCheck = (req) => {
    const {
        username,
        password,
        repeatPassword
    } = req.body;
    const errorObj = {
        error: null,
        message: null
    }

    if (username.length < 5) {
        errorObj.error = true;
        errorObj.message = 'Username must be at least 5 characters long!';
        return errorObj;
    }

    if (password.length < 6) {
        errorObj.error = true;
        errorObj.message = 'Password must be at least 6 characters long!';
        return errorObj;
    }

    if (req.url.includes('/login')) {
        errorObj.error = false;
        return errorObj;
    }


    if (password !== repeatPassword) {
        errorObj.error = true;
        errorObj.message = 'Passwords must match!';
        return errorObj
    }


    errorObj.error = false;
    return errorObj;
}

module.exports = usernameAndPasswordCheck;