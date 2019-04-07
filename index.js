require('dotenv').config();

const database = require('./lib/database');
const app = require('./app/app');

return database.openConnection()
	.then(() => app.initApp());

