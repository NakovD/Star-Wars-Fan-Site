const Comment = require('../models/comment/comment.js');
const Post = require('../models/post/post.js');
const User = require('../models/user/user.js');
const commentValidate = require('./commentValidation.js');


const saveComment = async (req, res) => {
    const {
        creator,
        commentContent,
        discussion
    } = req.body;
    const commentDataCheck = commentValidate(creator, commentContent, discussion);
    if (commentDataCheck.error) { return commentDataCheck };
    try {
        const userInfo = await User.findById(creator);
        const newComment = new Comment({ creator, creatorName: userInfo.username, commentContent, discussion });
        const saveInDb = await newComment.save();
        const updateDiscussion = await Post.findByIdAndUpdate(discussion, { $inc: { comments: 1 } });
        const allComments = await Comment.find({discussion: discussion});
        return {
            error: false,
            allComments
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

module.exports = saveComment;