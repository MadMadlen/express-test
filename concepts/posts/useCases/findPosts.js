const userQueries = require('../repositories/queries');
const formatter = require('../formatters/formatMany');

// TODO add filtering handling
function findAll () {
	return userQueries.findAll()
		.then(formatter.basicFormatter);
}

module.exports = {
	findAll,
};
