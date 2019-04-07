const formatOne = require('./formatOne');

function basicFormatter (posts) {
	return posts.map(post => formatOne.basicFormatter(post));
}

module.exports = {
	basicFormatter,
};
