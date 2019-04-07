const { initializePostRequestHelper } = require('../../../_utils/controller');

describe('POST /posts', function () {
	const postRequestHelper = initializePostRequestHelper(app, '/posts');

	context('when all parameters are send', function () {
		const params = {
			author: 'Gandalf',
			title: 'Lord of The Rings',
			body: 'Falcon',
		};

		postRequestHelper(params, 200, params);
	});

	context('when not all parameters are send', function () {
		context('when author not send', function () {
			const params = {
				title: 'Lord of The Rings',
				body: 'Falcon',
			};

			const expectedError = { detail: 'child "author" fails because ["author" is required]' };
			postRequestHelper(params, 400, expectedError);
		});

		context('when title not send', function () {
			const params = {
				author: 'Gandalf',
				body: 'Falcon',
			};

			const expectedError = { detail: 'child "title" fails because ["title" is required]' };
			postRequestHelper(params, 400, expectedError);
		});

		context('when body not send', function () {
			const params = {
				author: 'Gandalf',
				title: 'Lord of The Rings',
			};

			const expectedError = { detail: 'child "body" fails because ["body" is required]' };
			postRequestHelper(params, 400, expectedError);
		});
	});
});
