const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	author: String,
	title: String,
	body: String,
}, { timestamps: true });

mongoose.model('Post', PostSchema);