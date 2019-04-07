function basicFormatter (post) {
	return ({
		_id: post.id,
		author: post.author,
		title: post.title,
		body: post.body,
	});
}

module.exports = {
	basicFormatter,
};
