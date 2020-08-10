const mongoose = require('mongoose');

const FBUser = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    side: {
        type: String,
        default: 'Dark'
    },
    profilePic: {
        type: String,
        required: true
    },
    discussionsStarted: [{
        type: 'ObjectId'
    }],
    fbId: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('FBUser', FBUser, 'users');