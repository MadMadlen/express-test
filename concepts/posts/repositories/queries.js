const Post = require('mongoose').model('Post');

function findAll () {
	return Post.find();
}

module.exports = {
	findAll,
};
