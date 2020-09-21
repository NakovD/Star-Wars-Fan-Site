const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const io = require('socket.io')(3002);

io.on('connection', (socket) => {
    console.log('connected');
    socket.on('getId', (obj) => {
        mongoose.models.Comment.on('save', async (doc) => {
            if (doc.discussion.toHexString() === obj.discussion) {
                socket.emit('comments', 'update');
            }
        });
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    })
});





//here is the set up for the app;
app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({
    exposedHeaders: ['authToken', 'adminAuth']
}));






module.exports = app;