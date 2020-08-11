const express = require('express');
const router = express.Router();
const saveComment = require('../controllers/commentDbOperations.js');
const Comment = require('../models/comment/comment.js');
const { authorization } = require('../controllers/auth.js');

router.post('/addComment', authorization, async (req, res) => {
    const saveCommentFunc = await saveComment(req, res);
    if (saveCommentFunc.error) {
        res.status(400).json({ message: saveCommentFunc.message });
    } else {
        res.status(201).json({ message: 'Comment added successfully!' });
    }
});

router.get('/comments/:id', authorization, async (req, res) => {
    const discussionId = req.params.id;
    const page = +req.query.page || 0;
    try {
        const countAll = await Comment.find({ discussion: discussionId }).countDocuments();
        const comments = await Comment.find({ discussion: discussionId }).skip(10 * page).limit(10).lean();
        res.status(200).json({ comments, maxPages: Math.ceil(countAll / 10) });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;