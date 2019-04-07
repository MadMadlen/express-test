const chai = require('chai');
const chaiHttp = require('chai-http');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');
const assert = require('assert');
const sinonChai = require('sinon-chai');

const database = require('../lib/database');
const { initApp } = require('../app/app');

const app = initApp();

dotenv.config({ path: path.resolve('./.test.env')});

chai.use(sinonChai);
chai.use(chaiHttp);

global.assert = assert;
global.app = app;
global.expect = chai.expect;
global.chaiRequest = chai.request;

before(() => database.openConnection());

beforeEach(() => {
	const remove = (name) => mongoose.model(name).remove({});
	const removals = mongoose.modelNames().map(remove);
	return Promise.all(removals);
});

afterEach(() => mongoose.connection.db.dropDatabase());
