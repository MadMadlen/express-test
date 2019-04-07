const mongoose = require('mongoose');

require('../concepts/posts/models/Post');

function openConnection () {
	return mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
}

module.exports = { openConnection };
