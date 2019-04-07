const express = require('express');
const router = express.Router();

const postsRouter = require('../concepts/posts/index');

router.get('/', function (req, res) {
	res.json({ response: 'Hello world' });
});

router.use(postsRouter);

module.exports = router;
