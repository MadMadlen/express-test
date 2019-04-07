const Post = require('mongoose').model('Post');

function createOne (params) {
	return Post.create(params);
}

module.exports = {
	createOne,
};