const Joi = require('joi');
const schema = require('../validators/createValidator');
const createCommand = require('../repositories/commands/create');
const formatter = require('../formatters/formatOne');

function create (req) {
	return Joi.validate(req.body, schema)
		.then(createCommand.createOne)
		.then(formatter.basicFormatter);
}

module.exports = {
	create,
};
