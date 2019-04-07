const sinon = require('sinon');
const createCommand = require('../../../../concepts/posts/repositories/commands/create');
const formatter = require('../../../../concepts/posts/formatters/formatOne');
const { create } = require('../../../../concepts/posts/useCases/create');

describe('#create', function () {
	beforeEach(() => {
		sinon.spy(createCommand, 'createOne');
		sinon.spy(formatter, 'basicFormatter');
	});

	afterEach(() => {
		createCommand.createOne.restore();
		formatter.basicFormatter.restore();
	});

	describe('.create', function () {
		context('when schema is valid', function () {
			const req = {
				body: {
					author: 'Game',
					title: 'of',
					body: 'thrones',
				},
			};

			it('should call create command and formatter', function () {
				return create(req)
					.then(() => {
						expect(formatter.basicFormatter).to.have.been.calledOnce;
						expect(createCommand.createOne).to.have.been.calledOnce;
					});
			});
		});

		context('when schema is invalid', function () {
			const req = {
				body: {
					author: 'Game',
					title: 'of',
				},
			};

			it('should not call create command and formatters', function () {
				return create(req)
					.then(() => assert.fail('function passed but should\'t'))
					.catch(error => {
						expect(error.message).to.equal('child "body" fails because ["body" is required]');
						expect(formatter.basicFormatter).to.not.have.been.called;
						expect(createCommand.createOne).to.not.have.been.called;
					});
			});
		});
	});
});
