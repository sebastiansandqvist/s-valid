// ----- dependencies
// ---------------------------------------
var expect = require('chai').expect;
var valid = require('../index.js');


// ----- tests
// ---------------------------------------
describe('String', function() {

	describe('_isString', function() {

		it('should return true if passed a string', function() {
			expect(valid._isString('test')).to.be.true;
		});

		it('should return false if not passed a string', function() {
			expect(valid._isString(5)).to.be.false;
		});

	});


	describe('_testRegexp', function() {

		it('should have testable regexps', function() {
			expect(valid._regexps['email'].test('test@test.com')).to.be.true;
			expect(valid._regexps['email'].test('test')).to.be.false;
		});

		it('should return true if passing a regexp test', function() {
			expect(valid._testRegexp('email', 'test@test.com')).to.be.true;
		});

		it('should return false if failing a regexp test', function() {
			expect(valid._testRegexp('email', 'test@test.com')).to.be.true;
		});

	});


	describe('Affirmative', function() {

		it('should return false if not passed a string', function() {
			expect(valid.affirmative(5)).to.be.false;
		});

		it('should return true if passed a valid affirmative string', function() {
			expect(valid.affirmative('YES')).to.be.true;
			expect(valid.affirmative('Yes')).to.be.true;
			expect(valid.affirmative('yes')).to.be.true;
			expect(valid.affirmative('Y')).to.be.true;
			expect(valid.affirmative('y')).to.be.true;
			expect(valid.affirmative('ON')).to.be.true;
			expect(valid.affirmative('On')).to.be.true;
			expect(valid.affirmative('on')).to.be.true;
			expect(valid.affirmative('OK')).to.be.true;
			expect(valid.affirmative('Ok')).to.be.true;
			expect(valid.affirmative('ok')).to.be.true;
			expect(valid.affirmative('OKAY')).to.be.true;
			expect(valid.affirmative('Okay')).to.be.true;
			expect(valid.affirmative('okay')).to.be.true;
			expect(valid.affirmative('TRUE')).to.be.true;
			expect(valid.affirmative('True')).to.be.true;
			expect(valid.affirmative('true')).to.be.true;
			expect(valid.affirmative('T')).to.be.true;
			expect(valid.affirmative('t')).to.be.true;
		});

		it('should return false if not passed a valid affirmative string', function() {
			expect(valid.affirmative('O')).to.be.false;
			expect(valid.affirmative('o')).to.be.false;
			expect(valid.affirmative('')).to.be.false;
			expect(valid.affirmative('true ')).to.be.false;
			expect(valid.affirmative('test')).to.be.false;
		});

	});


	describe('AlphaNumeric', function() {

		it('should return false if not passed a string', function() {
			expect(valid.alphaNumeric(5)).to.be.false;
		});

		it('should return true if passed a valid alphaNumeric string', function() {
			expect(valid.alphaNumeric('12345')).to.be.true;
			expect(valid.alphaNumeric('test')).to.be.true;
			expect(valid.alphaNumeric('TEST')).to.be.true;
			expect(valid.alphaNumeric('12345TEST12345')).to.be.true;
		});

		it('should return false if not passed a valid alphaNumeric string', function() {
			expect(valid.alphaNumeric('')).to.be.false;
			expect(valid.alphaNumeric('à')).to.be.false;
			expect(valid.alphaNumeric('Tést')).to.be.false;
			expect(valid.alphaNumeric('$')).to.be.false;
			expect(valid.alphaNumeric('asd$123')).to.be.false;
			expect(valid.alphaNumeric('asd-123')).to.be.false;
			expect(valid.alphaNumeric('asd_123')).to.be.false;
			expect(valid.alphaNumeric('asd 123')).to.be.false;
			expect(valid.alphaNumeric('asd@123')).to.be.false;
			expect(valid.alphaNumeric('asd.')).to.be.false;
		});

	});


	describe('Email', function() {

		it('should return false if not passed a string', function() {
			expect(valid.email(5)).to.be.false;
		});

		it('should return true if passed a valid email', function() {
			expect(valid.email('test@test.com')).to.be.true;
		});

		it('should return false if not passed a valid email', function() {
			expect(valid.email('')).to.be.false;
			expect(valid.email('test')).to.be.false;
			expect(valid.email('test.com')).to.be.false;
			expect(valid.email('test@test')).to.be.false;
			expect(valid.email('test@test.')).to.be.false;
			expect(valid.email('test email@test.com')).to.be.false;
			expect(valid.email('mailto:test@test.com')).to.be.false;
		});

	});


	describe('Empty', function() {

		it('should return false if not passed a string', function() {
			expect(valid.empty(0)).to.be.false;
			expect(valid.empty(null)).to.be.false;
			expect(valid.empty(undefined)).to.be.false;
			expect(valid.empty(NaN)).to.be.false;
			expect(valid.empty([])).to.be.false;
			expect(valid.empty({})).to.be.false;
		});

		it('should return true if passed a valid empty string', function() {
			expect(valid.empty('')).to.be.true;
		});

		it('should return false if not passed a valid empty string', function() {
			expect(valid.empty(' ')).to.be.false;
			expect(valid.empty('\n')).to.be.false;
			expect(valid.empty('\r')).to.be.false;
			expect(valid.empty('\t')).to.be.false;
			expect(valid.empty('test')).to.be.false;
		});

	});


	describe('Length', function() {

		it('should throw if not passed correct parameters', function() {

			expect(function() {
				valid.length(null);
			}).to.throw('s-valid character methods expect two arguments (Number, String)');

			expect(function() {
				valid.length('test', 'test');
			}).to.throw('s-valid character methods expect two arguments (Number, String)');

			expect(function() {
				valid.length(10, 10);
			}).to.throw('s-valid character methods expect two arguments (Number, String)');

			expect(function() {
				valid.length('test', 10);
			}).to.throw('s-valid character methods expect two arguments (Number, String)');

			expect(function() {
				valid.length(10, 'test', 'test');
			}).to.throw('s-valid character methods expect two arguments (Number, String)');

		});

		it('should return true if passed a string of same length', function() {
			expect(valid.length(4, 'test')).to.be.true;
			expect(valid.length(0, '')).to.be.true;
		});

		it('should return false if passed a string longer than the given length', function() {
			expect(valid.length(0, 'test')).to.be.false;
			expect(valid.length(2, 'test')).to.be.false;
			expect(valid.length(-4, 'test')).to.be.false;
		});

	});


	describe('Max Characters', function() {

		it('should throw if not passed correct parameters', function() {

			expect(function() {
				valid.maxChars(null);
			}).to.throw('s-valid character methods expect two arguments (Number, String)');

			expect(function() {
				valid.maxChars('test', 'test');
			}).to.throw('s-valid character methods expect two arguments (Number, String)');

			expect(function() {
				valid.maxChars(10, 10);
			}).to.throw('s-valid character methods expect two arguments (Number, String)');

			expect(function() {
				valid.maxChars('test', 10);
			}).to.throw('s-valid character methods expect two arguments (Number, String)');

			expect(function() {
				valid.maxChars(10, 'test', 'test');
			}).to.throw('s-valid character methods expect two arguments (Number, String)');

		});

		var oneHundredChars = new Array(101).join('a');

		it('should return true if passed a string no longer than the given length', function() {
			expect(valid.maxChars(Infinity, oneHundredChars)).to.be.true;
			expect(valid.maxChars(101, oneHundredChars)).to.be.true;
			expect(valid.maxChars(100, oneHundredChars)).to.be.true;
			expect(valid.maxChars(10, 'test')).to.be.true;
			expect(valid.maxChars(4, 'test')).to.be.true;
			expect(valid.maxChars(4, '')).to.be.true;
			expect(valid.maxChars(0, '')).to.be.true;
		});

		it('should return false if passed a string longer than the given length', function() {
			expect(valid.maxChars(99, oneHundredChars)).to.be.false;
			expect(valid.maxChars(NaN, 'test')).to.be.false;
			expect(valid.maxChars(-1, 'test')).to.be.false;
			expect(valid.maxChars(2, 'test')).to.be.false;
			expect(valid.maxChars(0, 'test')).to.be.false;
		});

	});


	describe('Min Characters', function() {

		it('should throw if not passed correct parameters', function() {

			expect(function() {
				valid.minChars(null);
			}).to.throw('s-valid character methods expect two arguments (Number, String)');

			expect(function() {
				valid.minChars('test', 'test');
			}).to.throw('s-valid character methods expect two arguments (Number, String)');

			expect(function() {
				valid.minChars(10, 10);
			}).to.throw('s-valid character methods expect two arguments (Number, String)');

			expect(function() {
				valid.minChars('test', 10);
			}).to.throw('s-valid character methods expect two arguments (Number, String)');

			expect(function() {
				valid.minChars(10, 'test', 'test');
			}).to.throw('s-valid character methods expect two arguments (Number, String)');

		});

		it('should return true if passed a string longer than (or equal to) the given length', function() {
			expect(valid.minChars(0, '')).to.be.true;
			expect(valid.minChars(0, 'test')).to.be.true;
			expect(valid.minChars(4, 'test')).to.be.true;
			expect(valid.minChars(-1, '')).to.be.true;
		});

		it('should return false if passed a string longer than the given length', function() {
			expect(valid.minChars(5, 'test')).to.be.false;
			expect(valid.minChars(NaN, 'test')).to.be.false;
		});

	});



	describe('Negatory', function() {

		it('should return false if not passed a string', function() {
			expect(valid.negatory(0)).to.be.false;
		});

		it('should return true if passed a valid negatory string', function() {
			expect(valid.negatory('NO')).to.be.true;
			expect(valid.negatory('No')).to.be.true;
			expect(valid.negatory('no')).to.be.true;
			expect(valid.negatory('N')).to.be.true;
			expect(valid.negatory('n')).to.be.true;
			expect(valid.negatory('OFF')).to.be.true;
			expect(valid.negatory('Off')).to.be.true;
			expect(valid.negatory('off')).to.be.true;
			expect(valid.negatory('FALSE')).to.be.true;
			expect(valid.negatory('False')).to.be.true;
			expect(valid.negatory('false')).to.be.true;
			expect(valid.negatory('F')).to.be.true;
			expect(valid.negatory('f')).to.be.true;
		});

		it('should return false if not passed a valid negatory string', function() {
			expect(valid.negatory('O')).to.be.false;
			expect(valid.negatory('o')).to.be.false;
			expect(valid.negatory('0')).to.be.false;
			expect(valid.negatory('false ')).to.be.false;
			expect(valid.negatory('test')).to.be.false;
		});

	});


	describe('Not Empty', function() {

		it('should return false if not passed a string', function() {
			expect(valid.notEmpty(0)).to.be.false;
			expect(valid.notEmpty(null)).to.be.false;
			expect(valid.notEmpty(undefined)).to.be.false;
			expect(valid.notEmpty(NaN)).to.be.false;
			expect(valid.notEmpty([])).to.be.false;
			expect(valid.notEmpty({})).to.be.false;
		});

		it('should return true if passed a valid not empty string', function() {
			expect(valid.notEmpty('test')).to.be.true;
			expect(valid.notEmpty(' ')).to.be.true;
			expect(valid.notEmpty('	')).to.be.true;
		});

		it('should return false if passed an empty string', function() {
			expect(valid.notEmpty('')).to.be.false;
		});

	});


	describe('Number String', function() {

		it('should return false if not passed a string', function() {
			expect(valid.numberString(0)).to.be.false;
		});

		it('should return true if passed a valid number string', function() {
			expect(valid.numberString('0')).to.be.true;
			expect(valid.numberString('123')).to.be.true;
			expect(valid.numberString('-123')).to.be.true;
			expect(valid.numberString('123.123')).to.be.true;
		});

		it('should return false if passed a bad string', function() {
			expect(valid.numberString('')).to.be.false;
			expect(valid.numberString('test')).to.be.false;
			expect(valid.numberString('123px')).to.be.false;
			expect(valid.numberString('123%')).to.be.false;
			expect(valid.numberString('$123')).to.be.false;
			expect(valid.numberString('123,000')).to.be.false;
			expect(valid.numberString('123.123.123')).to.be.false;
		});

	});


	describe('Loose Number String', function() {

		it('should return false if not passed a string', function() {
			expect(valid.numberStringLoose(0)).to.be.false;
		});

		it('should return true if passed a valid number string', function() {
			expect(valid.numberStringLoose('0')).to.be.true;
			expect(valid.numberStringLoose('-0')).to.be.true;
			expect(valid.numberStringLoose('+0')).to.be.true;
			expect(valid.numberStringLoose('123')).to.be.true;
			expect(valid.numberStringLoose('-123')).to.be.true;
			expect(valid.numberStringLoose('+123')).to.be.true;
			expect(valid.numberStringLoose('123.123')).to.be.true;
			expect(valid.numberStringLoose('123px')).to.be.true;
			expect(valid.numberStringLoose('123%')).to.be.true;
			expect(valid.numberStringLoose('$123')).to.be.true;
			expect(valid.numberStringLoose('123-123')).to.be.true;
			expect(valid.numberStringLoose('123,000')).to.be.true;
			expect(valid.numberStringLoose('123,000.00')).to.be.true;
		});

		it('should return false if passed a bad string', function() {
			expect(valid.numberStringLoose('')).to.be.false;
			expect(valid.numberStringLoose('NaN')).to.be.false;
			expect(valid.numberStringLoose('test')).to.be.false;
			expect(valid.numberStringLoose('te123st')).to.be.false;
			expect(valid.numberStringLoose('Infinity')).to.be.false;
			expect(valid.numberStringLoose('-')).to.be.false;
			expect(valid.numberStringLoose('+')).to.be.false;
		});

	});


	describe('Space', function() {

		it('should return false if not passed a string', function() {
			expect(valid.space(0)).to.be.false;
		});

		it('should return true if passed a valid space string', function() {
			expect(valid.space(' ')).to.be.true;
		});

		it('should return false if not passed a valid space string', function() {
			expect(valid.space('')).to.be.false;
			expect(valid.space('	')).to.be.false;
			expect(valid.space('  ')).to.be.false;
			expect(valid.space('\n')).to.be.false;
			expect(valid.space('\r')).to.be.false;
			expect(valid.space('\t')).to.be.false;
			expect(valid.space('spaced words')).to.be.false;
		});

	});


	describe('URL', function() {

		it('should return false if not passed a string', function() {
			expect(valid.url(5)).to.be.false;
		});

		it('should return true if passed a valid url', function() {
			expect(valid.url('https://test.com')).to.be.true;
			expect(valid.url('http://test.com')).to.be.true;
			expect(valid.url('http://test.com:3000')).to.be.true;
			expect(valid.url('http://test.com/path')).to.be.true;
			expect(valid.url('http://test.com/path/')).to.be.true;
			expect(valid.url('http://test.com/path/to/img.jpg')).to.be.true;
			expect(valid.url('http://test.com:3000/path/to/img.jpg')).to.be.true;
			expect(valid.url('http://4.35.153.221')).to.be.true;
			expect(valid.url('http://4.35.153.221/')).to.be.true;
			expect(valid.url('https://4.35.153.221/')).to.be.true;
			expect(valid.url('https://4.35.153.221:3000')).to.be.true;
			expect(valid.url('https://4.35.153.221:3000/path')).to.be.true;
		});

		it('should return false if not passed a valid url', function() {
			expect(valid.url('')).to.be.false;
			expect(valid.url('test')).to.be.false;
			expect(valid.url('test.com')).to.be.false;
			expect(valid.url('www.test.com')).to.be.false;
			expect(valid.url('http:/test.com')).to.be.false;
			expect(valid.url('http//test.com')).to.be.false;
			expect(valid.url('4.35.153.221')).to.be.false;
			expect(valid.url('http://300.35.153.221')).to.be.false;
		});

	});

});