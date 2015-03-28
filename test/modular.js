// ----- dependencies
// ---------------------------------------
var expect = require('chai').expect;
var validEmail = require('../index.js').email;


// ----- tests
// ---------------------------------------
// describe('Modular Email', function() {

// 	it('should return false if not passed a string', function() {
// 		expect(validEmail(5)).to.be.false;
// 	});

// 	it('should return true if passed a valid email', function() {
// 		expect(validEmail('test@test.com')).to.be.true;
// 	});

// 	it('should return false if not passed a valid email', function() {
// 		expect(validEmail('')).to.be.false;
// 		expect(validEmail('test')).to.be.false;
// 		expect(validEmail('test.com')).to.be.false;
// 		expect(validEmail('test@test')).to.be.false;
// 		expect(validEmail('test@test.')).to.be.false;
// 		expect(validEmail('test email@test.com')).to.be.false;
// 		expect(validEmail('mailto:test@test.com')).to.be.false;
// 	});

// });