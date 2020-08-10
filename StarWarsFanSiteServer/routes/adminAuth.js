const express = require('express');
const router = express.Router();
const {
    verifyAdminWannabe,
    registerAdmin,
    logInAdmin,
    verifyAdminLogin } = require('../controllers/adminAuth.js');

router.post('/admin/verify', (req, res) => {
    const check = verifyAdminWannabe(req, res);
    if (!check.error) {
        res.status(200).json({ message: 'Ok, you have the correct secret code!' });
    } else {
        res.status(400).json({ message: check.message });
    }
});

router.post('/admin/register', async (req, res) => {
    const regAdmin = await registerAdmin(req, res);
    if (!regAdmin.error) {
        res.status(201).json({ message: 'Admin, successfully registered!', userInfo: regAdmin.userInfo });
    } else {
        res.status(400).json({ message: regAdmin.message });
    }
});

router.post('/admin/login', async (req, res) => {
    const loginAdmin = await logInAdmin(req, res);
    if (!loginAdmin.error) {
        res.status(200).json({ message: 'Admin logged in successfully!', userInfo: loginAdmin.userInfo });
    } else {
        res.status(400).json({ message: loginAdmin.message });
    }
    return;
})

router.post('/admin/verifyLogin', async (req, res) => {
    const verifyAdminLog = await verifyAdminLogin(req, res);
    if (!verifyAdminLog.error) {
        res.status(200).json({ message: 'Admin login is verified!', userInfo: verifyAdminLog.userInfo });
    } else {
        res.status(400).json({ message: verifyAdminLog.message });
    }
})



module.exports = router;