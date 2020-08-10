const mongoose = require('mongoose');
const { socket } = require('../../config/express.js');

const Comment = new mongoose.Schema({
    creator: {
        type: 'ObjectId',
        ref: 'User',
        required: true
    },
    creatorName: {
        type: 'String',
        required: true
    },
    commentContent: {
        type: String,
        required: true,
    },
    discussion: {
        type: 'ObjectId',
        ref: 'Post',
        required: true
    }
});


module.exports = mongoose.model('Comment', Comment);