const express = require('express');
const router = express.Router();
const Post = require('../models/post/post.js');
const {
    save,
    like,
    edit,
    deletePost } = require('../controllers/postDBOperations.js');
const sortPosts = require('../controllers/sortPosts.js');
const { authorization } = require('../controllers/auth.js');

router.get('/posts', authorization, async (req, res) => {
    const sortKeyWord = req.query.sort || '';
    const sortedPosts = await sortPosts(sortKeyWord);
    if (!sortedPosts.error) {
        res.status(200).json(sortedPosts.posts);
    } else {
        res.status(500).json({ message: sortedPosts.message });
    }
});

router.get('/post/:id', authorization, async (req, res) => {
    const id = req.params.id;
    try {
        const postInfo = await Post.findById(id).populate('creator').lean();
        res.status(200).json(postInfo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

});

router.post('/editDisc/:id', authorization, async (req, res) => {
    const editPost = await edit(req, res);
    if (!editPost.error) {
        res.status(200).json({ message: 'Post updated successfully!' });
    } else {
        res.status(500).json({ message: editPost.message });
    }

});

router.post('/createPost', authorization, async (req, res) => {
    const savePost = await save(req);
    if (!savePost.error) {
        res.status(201).json({ message: 'Post created successfully!' });
    } else {
        res.status(400).json({ message: savePost.message });
    }
});

router.post('/likePost', authorization, async (req, res) => {
    const likePost = await like(req, res);
    if (!likePost.error) {
        res.status(200).json({ message: 'User has liked the post successfully!' });
    } else {
        res.status(500).json({ message: likePost.message });
    }
});

router.delete('/delete/:id', authorization, async (req, res) => {
    const deletePost_ = await deletePost(req, res);
    if (!deletePost_.error) {
        res.status(200).json({ message: 'Post deleted successfully!' });
        return;
    } else {
        res.status(500).json({ message: deletePost_.message });
    }
});






module.exports = router;