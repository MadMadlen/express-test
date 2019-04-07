const faker = require('faker');
const Post = require('mongoose').model('Post');

function PostFactory (attrs = {}) {
	const defaults = {
		author: faker.name.findName(),
		title: faker.lorem.words(),
		body: faker.lorem.sentences(),
	};

	return new Post(Object.assign(defaults, attrs));
}

module.exports = {
	PostFactory
};
