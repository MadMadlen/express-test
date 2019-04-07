const express = require('express');

function initApp () {
	const routes = require('./routes');

	const app = express();

	app.use(express.json());
	app.use(routes);

	app.listen(process.env.PORT);

	return app;
}

module.exports = { initApp };
