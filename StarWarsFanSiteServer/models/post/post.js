const mongoose = require('mongoose');


const Post = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: [5, 'Title must be at least 5 characters!']
    },
    creator: {
        type: 'ObjectId',
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: [20, 'Description must be at least 20 characters!']
    },
    createdAt: {
        type: Date,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    },
    usersLiked: [{
        type: 'ObjectId',
        ref: 'User',
    }],
});


module.exports = mongoose.model('Post', Post);