const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: 'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg'
    },
    side: {
        type: String,
        default: 'dark'
    },
    discussionsStarted: [{
        type: 'ObjectId',
        ref: 'Post'
    }]
});


module.exports = mongoose.model('User', User, 'users');