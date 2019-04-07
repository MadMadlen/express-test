const express = require('express');
const router = express.Router();

const create = require('./controllers/create');
const index = require('./controllers/index');

router.post('/posts', create);
router.get('/posts', index);

module.exports = router;