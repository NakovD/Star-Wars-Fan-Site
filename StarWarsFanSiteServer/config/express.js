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
                const allComments = await mongoose.models.Comment.find({ discussion: obj.discussion }).sort({ _id: -1 }).skip(obj.page * 10).limit(10);
                const allCount = await mongoose.models.Comment.find({ discussion: obj.discussion}).countDocuments();
                console.log(allComments);
                if ((obj.page + 1) === Math.ceil(allCount / 10)) {
                    socket.emit('comments', allComments);
                    console.log('you are on the last page :)');
                }
            }
        });
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    })
});
app.use((req, res, next) => {
    req.io = io;
    next();
});




//here is the set up for the app;
app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors({
    exposedHeaders: ['authToken', 'adminAuth']
}));






module.exports = app;