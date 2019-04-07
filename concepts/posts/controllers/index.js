const findPosts = require('../useCases/findPosts');

function index (_, res) {
	return findPosts.findAll()
		.then(results => res.json(results))
		.catch(error => res.status(400).json({ detail: error.message }));
}

module.exports = index;