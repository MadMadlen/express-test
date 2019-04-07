const Joi = require('joi');

const schema = Joi.object().keys({
	author: Joi.string().required(),
	title: Joi.string().required(),
	body: Joi.string().required(),
});

module.exports = schema;
