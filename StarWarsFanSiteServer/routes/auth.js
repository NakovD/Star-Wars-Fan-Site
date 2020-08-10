const express = require('express');
const router = express.Router();
const {
    register,
    registerFB,
    logIn,
    verifyUser
} = require('../controllers/auth.js');


router.post('/register', async (req, res) => {
    const registerUser = await register(req, res);
    if (registerUser.error) {
        res.status(400).json({
            message: registerUser.message
        });
    } else {
        res.status(201).json({
            message: 'User registered successfully!',
            userInfo: registerUser.user
        });
    }
});

router.post('/registerFbUser', async (req, res) => {
    const registerFbUser = await registerFB(req, res);
    if (registerFbUser.error) {
        res.status(400).json({ message: registerFbUser.message });
    } else {
        res.status(201).json({ message: 'FB user stored successfully!', userInfo: registerFbUser.user });
    }
});

router.post('/login', async (req, res) => {
    const logInUser = await logIn(req, res);
    if (logInUser.error) {
        res.status(400).json({ message: logInUser.message });
    } else {
        res.status(200).json(
            {
                message: 'User logged in successfully!',
                userInfo: logInUser.user
            });
    }
});

router.get('/verifyUser', async (req, res) => {
    const verify = await verifyUser(req, res);
    if (verify.error) {
        res.status(400).json({ message: verify.message });
    } else {
        res.status(200).json({
            status: 'verified User',
            userInfo: verify.userInfo
        });
    }
});




module.exports = router;