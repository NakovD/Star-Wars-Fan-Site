const mongoose = require('mongoose');



const Character = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    factions: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },
    era: {
        type: String,
        required: true
    },
    imgURL: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: [20, 'Description must be at least 20 characters long!']
    }
});

// Character.path('imgURL').validate(function (value) {
//     return value.startsWith('https://') || value.startsWith('http://');
// }, 'Image link is invalid!');


module.exports = {
    approved: mongoose.model('Character', Character, 'approvedChars'),
    notApproved: mongoose.model('Character', Character, 'notApprovedChars')
}