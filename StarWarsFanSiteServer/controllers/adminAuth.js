const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const privateKey = require('../config/env_var.js').development.PRIVATE_KEY;
const Admin = require('../models/admin/admin.js');
const usernameAndPasswordCheck = require('./userInfoValidation.js');

const verifyAdminWannabe = (req, res) => {
    const { secretCode } = req.body;
    if (secretCode === privateKey) {
        const data = {
            verifiedWannabe: true
        }
        const token = jwt.sign(data, privateKey);
        return {
            error: false,
        }
    } else {
        return {
            error: true,
            message: 'Sorry this is not the private key!'
        }
    }
}

const registerAdmin = async (req, res) => {
    const {
        username,
        password,
        repeatPassword
    } = req.body;

    const check = usernameAndPasswordCheck(req);
    if (check.error) {
        return check;
    }

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const readyAdmin = new Admin({ username, password: hashedPassword });
        const saveAdminInDB = await readyAdmin.save();
        const token = jwt.sign({
            adminId: readyAdmin._id,
            username: readyAdmin.username
        }, privateKey);
        res.setHeader('adminAuth', token);
        return {
            error: false,
            userInfo: {
                userId: readyAdmin._id,
                username: readyAdmin.username,
                side: 'admin'
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

const logInAdmin = async (req, res) => {
    const {
        username,
        password
    } = req.body;

    const dataCheck = usernameAndPasswordCheck(req);
    if (dataCheck.error) {
        return {
            error: true,
            message: dataCheck.message
        }
    }
    const usernameCheck = await Admin.findOne({ username }).lean();
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
            message: 'Invalid password or username!'
        }
    }
    try {
        const token = jwt.sign({
            adminId: usernameCheck._id,
            username: usernameCheck.username
        }, privateKey);
        res.setHeader('adminAuth', token);
        return {
            error: false,
            userInfo: {
                username: usernameCheck.username,
                userId: usernameCheck._id,
                side: 'admin'
            }
        }
    } catch (error) {

    }

}

const verifyAdminLogin = async (req, res) => {
    const token = req.body.token || '';
    try {
        const verifyToken = await jwt.verify(token, privateKey);
        const admin = await Admin.findById(verifyToken.adminId);
        return {
            error: false,
            userInfo: {
                username: admin.username,
                userId: admin._id,
                side: 'admin'
            }
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

const adminAuthorization = (req, res, next) => {
    const token = req.headers.auth;
    if (!token) {
        res.status(401).json({ message: 'You are not authorized to use this resource!' });
        return;
    }
    try {
        const verificateToken = jwt.verify(token, privateKey);
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
    verifyAdminWannabe,
    registerAdmin,
    logInAdmin,
    verifyAdminLogin,
    adminAuthorization
};