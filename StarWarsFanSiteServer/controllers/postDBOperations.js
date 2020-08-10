const Post = require('../models/post/post.js');
const User = require('../models/user/user.js');
const Comment = require('../models/comment/comment.js');
const errorMessageClean = require('./errorMssgCleaner.js');
const postValidate = require('./postValidation.js');


const save = async (req) => {
    const {
        title,
        creator,
        description,
        createdAt,
        likes,
        usersLiked,
    } = req.body;
    const postDataCheck = postValidate(title, description, creator);
    if (postDataCheck.error) { return postDataCheck };
    try {
        const newPost = new Post({ title, creator, description, createdAt, likes: 0, usersLiked });
        const savePostInDB = await newPost.save();
        const updateUser = await User.findByIdAndUpdate(creator, { $addToSet: { discussionsStarted: newPost._id } });
        return {
            error: false
        }
    } catch (error) {
        const cleanErrMssg = errorMessageClean(error.message);
        return {
            error: true,
            message: cleanErrMssg
        }
    }
}

const like = async (req, res) => {
    const {
        userId,
        discussionId
    } = req.body;
    try {
        const discussionInfo = await Post.findById(discussionId);
        if (discussionInfo.usersLiked.includes(userId)) {
            return {
                error: true,
                message: 'User has already liked this post!'
            }
        } else {
            const discussionInfoUpdate = await Post.findByIdAndUpdate(discussionId, {
                $addToSet: { usersLiked: [userId] },
                $inc: { likes: 1 }
            });
            return {
                error: false
            }
        }

    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }

}

const edit = async (req, res) => {
    const discId = req.params.id;
    const {
        title,
        description,
        userId
    } = req.body;
    try {
        const postInfo = await Post.findById(discId);
        if (postInfo.creator.toHexString() !== userId) {
            return {
                error: true,
                message: 'You rea not the author of this post!'
            }
        }
        const update = await Post.findByIdAndUpdate(discId, { title, description }, { omitUndefined: true });
        return {
            error: false
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

const deletePost = async (req, res) => {
    const discussionId = req.params.id;
    const userId = req.body.userId;
    try {
        const discussionDetails = await Post.findById(discussionId);
        if (discussionDetails.creator.toHexString() !== userId) {
            return {
                error: true,
                message: "You can't delete this post, cause you aren't the creator!"
            }
        }
        const deleteComments = await Comment.deleteMany({ discussion: discussionId });
        const deletePost = await discussionDetails.deleteOne();
        const updateUser = await User.findByIdAndUpdate(userId, { $pull: { discussionsStarted: discussionId } });
        return {
            error: false
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

module.exports = {
    save,
    like,
    edit,
    deletePost
};
