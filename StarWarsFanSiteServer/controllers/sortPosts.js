const Post = require('../models/post/post.js');


const sortPosts = async (sortWord) => {
    try {
        const allPosts = await Post.find().lean().populate('creator');
        if (sortWord !== 'date') {
            const sorted = allPosts.sort((a, b) => b[sortWord] - a[sortWord]);
            return {
                error: false,
                posts: sorted
            }
        } else if (sortWord === 'date') {
            const sorted = allPosts.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt));
            return {
                error: false,
                posts: sorted
            }
        }
        return {
            error: false,
            posts: allPosts
        };

    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }

}

module.exports = sortPosts;