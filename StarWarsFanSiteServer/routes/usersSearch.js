const express = require('express');
const router = express.Router();
const FBUser = require('../models/user/FBUser.js');
const User = require('../models/user/user.js');

router.get('/FBUsersSearch', async (req, res) => {           //TO DO: this is gonna be the facebook Id for FB Users;
    try {
        const findFBUsers = await FBUser.find().lean();
        res.status(200).json(findFBUsers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get('/user/:id', async (req, res) => {  //TO DO: this is gonna be the ObjectId(which mongoose makes) for not fb users;
    const userId = req.params.id;
    try {
        const findUser = await User.findById(userId).populate('discussionsStarted').lean();
        res.status(200).json(findUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/changeSide/:id', async (req, res) => {
    const userId = req.params.id;
    const side = req.body.side;
    try {
        const userInfo = await User.findById(userId);
        if (userInfo.side === side) {
            res.status(202).json({ message: `Sorry, you are already ${side} side now!` });
        } else {
            const userUpdate = await User.findByIdAndUpdate(userId, { side: side });
            res.status(200).json({ message: 'Side changed successfully!' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/changePic/:id', async (req, res) => {
    const userId = req.params.id;
    const IMGLink = req.body.linkIMG;
    try {
        const userUpdate = await User.findByIdAndUpdate(userId, { profilePic: IMGLink });
        res.status(200).json({ message: 'Profile picture changed successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;