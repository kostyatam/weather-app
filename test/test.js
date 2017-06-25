const chai = require('chai');
const _ = require('lodash');

chai.use(require('chai-fs'));
const {assert, expect} = chai;


const {Structure} = require('../scripts/create.js');

describe('Structure', () => {
	describe('#parseName', () => {
		it('should return parsed name', () => {
			assert.equal(Structure.parseName('$name.js', {name: 'Example'}), 'Example.js');
			assert.equal(Structure.parseName('$foo-$bar.js', {foo: 'bar', bar: 'foo'}), 'bar-foo.js');
			assert.equal(Structure.parseName('nameWithoutTemplates', {foo: 'bar', bar: 'foo'}), 'nameWithoutTemplates')
		})
	})
	describe('#getTree', () => {
		it('should return right file structure', async () => {
			const tree = await Structure.getStructure();
			const PATH = '../scripts/structures/component';
		})	
	})
})