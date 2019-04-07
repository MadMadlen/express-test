const { PostFactory } = require('../../../factories/posts');
const { initializeGetManyRequestHelper } = require('../../../_utils/controller');

describe('GET /posts', function () {
	const getManyRequestHelper = initializeGetManyRequestHelper(app, '/posts');

	context('when there are no posts', function () {
		getManyRequestHelper([]);
	});

	context('when there are posts', function () {
		let firstPost;
		let secondPost;

		beforeEach(() => {
			firstPost = PostFactory();
			secondPost = PostFactory();

			return Promise.all([firstPost.save(), secondPost.save()]);
		});

		it('should return proper records', function () {
			const expectedResult = [
				{
					_id: firstPost._id.toString(),
					author: firstPost.author,
					title: firstPost.title,
					body: firstPost.body,
				},
				{
					_id: secondPost._id.toString(),
					author: secondPost.author,
					title: secondPost.title,
					body: secondPost.body,
				}
			];
	
			return getManyRequestHelper(expectedResult);
		});
	});
});
