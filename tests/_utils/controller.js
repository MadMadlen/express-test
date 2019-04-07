function initializePostRequestHelper (app, path) {
	return (params, expectedStatus, expectedBody) => {
		it('should have proper status and response body', function () {
			return chaiRequest(app)
				.post(path)
				.send(params)
				.then(result => {
					expect(result.status).to.equal(expectedStatus);
					expect(result.body).to.deep.include(expectedBody);
				});
		});
	};
}

function initializeGetManyRequestHelper (app, path) {
	return (expectedBody, expectedStatus = 200) => {
		return chaiRequest(app)
			.get(path)
			.then(result => {
				expect(result.status).to.equal(expectedStatus);
				expect(result.body).to.deep.equal(expectedBody);
			});
	};
}

module.exports = {
	initializePostRequestHelper,
	initializeGetManyRequestHelper,
};
