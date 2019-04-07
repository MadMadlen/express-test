const createPost = require('../useCases/create');

function create (req, res) {
	return createPost.create(req)
		.then(result => res.json(result))
		.catch(error => res.status(400).json({ detail: error.message }));
}

module.exports = create;
