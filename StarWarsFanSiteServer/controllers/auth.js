const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const privateKey = require('../config/env_var.js').development.PRIVATE_KEY;
const User = require('../models/user/user.js');
const usernameAndPasswordCheck = require('./userInfoValidation.js');

const addCookie = (data, res) => {
    try {
        const token = jwt.sign(data, privateKey);
        res.setHeader('authToken', token);
        return {
            error: false
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }

}

const register = async (req, res) => {
    const {
        username,
        password,
        repeatPassword,
        side,
    } = req.body;

    const userInfoValidation = usernameAndPasswordCheck(req);
    if (userInfoValidation.error) {
        return userInfoValidation;
    }

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const readyUser = new User({ username, password: hashedPassword, side });
        const saveUserInDB = await readyUser.save();
        addCookie({ username, userId: readyUser._id }, res);
        return {
            error: false,
            user: {
                username: readyUser.username,
                userId: readyUser._id,
                side: readyUser.side
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }


}

const registerFB = async (req, res) => {         //TO DO: add cookies with jwt token
    const userData = {
        username: req.body.name,
        password: req.body.id,
        profilePic: req.body.picture.data.url
    }
    const checkUserInDB = await User.findOne({ username: userData.username });
    if (checkUserInDB) {
        const fbIdCheck = await bcrypt.compare(userData.password, checkUserInDB.password);
        if (!fbIdCheck) {
            return {
                error: true,
                message: 'Please try again!'
            }
        }
        addCookie({ username: checkUserInDB.username, userId: checkUserInDB._id }, res);
        return {
            error: false,
            user: {
                username: checkUserInDB.username,
                userId: checkUserInDB._id,
                side: checkUserInDB.side
            }
        }
    }
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
    const readyFBUser = new User({
        username: userData.username,
        password: hashedPassword,
        profilePic: userData.profilePic
    });
    try {
        const saveUserInDB = await readyFBUser.save();
        addCookie({ username: readyFBUser.username, userId: readyFBUser._id }, res);
        return {
            error: false,
            user: {
                username: readyFBUser.username,
                userId: readyFBUser._id,
                side: readyFBUser.side,
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

const logIn = async (req, res) => {
    const {
        username,
        password
    } = req.body;

    const dataErrCheck = usernameAndPasswordCheck(req);
    if (dataErrCheck.error) {
        return {
            error: true,
            message: dataErrCheck.message
        }
    }

    const usernameCheck = await User.findOne({ username }).lean();
    if (!usernameCheck) {
        return {
            error: true,
            message: 'Invalid password or username!'
        }
    }

    const passwordCheck = await bcrypt.compare(password, usernameCheck.password);
    if (!passwordCheck) {
        return {
            error: true,
            message: 'Invalid username or password!'
        }
    }
    try {
        const generateToken = addCookie({
            userId: usernameCheck._id,
            username
        }, res);

        return {
            error: false,
            user: {
                username,
                userId: usernameCheck._id,
                side: usernameCheck.side,
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }

}

const verifyUser = async (req, res) => {
    const token = req.headers.auth || '';
    try {
        const verifyToken = await jwt.verify(token, privateKey);
        const findUser = await User.findById(verifyToken.userId);
        return {
            error: false,
            userInfo: {
                username: findUser.username,
                userId: findUser._id,
                side: findUser.side
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

const authorization = (req, res, next) => {
    const token = req.headers.auth;
    if (!token) {
        res.status(401).json({ message: 'You are not authorized to use thir resource!' });
        return;
    }
    try {
        const validateToken = jwt.verify(token, privateKey);
        next();
    } catch (error) {
        res.status(401).json({
            errorMessage: error.message,
            more: 'You are not authorized to use this resource!'
        });
        return;
    }
}





module.exports = {
    register,
    registerFB,
    logIn,
    verifyUser,
    authorization
}