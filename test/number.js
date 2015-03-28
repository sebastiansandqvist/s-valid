// ----- dependencies
// ---------------------------------------
var expect = require('chai').expect;
var valid = require('../index.js');


// ----- tests
// ---------------------------------------
describe('Number', function() {

	describe('_isNumber', function() {

		it('should return true if passed a string', function() {
			expect(valid._isNumber(5)).to.be.true;
		});

		it('should return false if not passed a string', function() {
			expect(valid._isNumber('test')).to.be.false;
		});

	});

	describe('Credit Card', function() {

		it('should return false if not passed a number', function() {
			expect(valid.creditCard('')).to.be.false;
		});

		it('should return true if passed a valid credit card number', function() {
			expect(valid.creditCard(4222222222222)).to.be.true;    // visa
			expect(valid.creditCard(4111111111111111)).to.be.true; // visa
			expect(valid.creditCard(4242424242424242)).to.be.true; // visa
			expect(valid.creditCard(378282246310005)).to.be.true;  // amex
			expect(valid.creditCard(371449635398431)).to.be.true;  // amex
			expect(valid.creditCard(378734493671000)).to.be.true;  // amex corporate
			expect(valid.creditCard(6011111111111117)).to.be.true; // discover
			expect(valid.creditCard(6011000990139424)).to.be.true; // discover
			expect(valid.creditCard(5555555555554444)).to.be.true; // mastercard
			expect(valid.creditCard(5105105105105100)).to.be.true; // mastercard
			expect(valid.creditCard(3530111333300000)).to.be.true; // jcb
			expect(valid.creditCard(3566002020360505)).to.be.true; // jcb
			expect(valid.creditCard(6331101999990016)).to.be.true; // switch / solo
			expect(valid.creditCard(38000000000006)).to.be.true;   // carte blanche
			expect(valid.creditCard(30569309025904)).to.be.true;   // diners club
			expect(valid.creditCard(38520000023237)).to.be.true;   // diners club
			expect(valid.creditCard(6304850000000040)).to.be.true; // laser card
			expect(valid.creditCard(6304850000000602)).to.be.true; // laser card
			expect(valid.creditCard(6240008631401148)).to.be.true; // unionpay
			expect(valid.creditCard(6759649826438453)).to.be.true; // maestro
			expect(valid.creditCard(6759000000000000)).to.be.true; // maestro uk
			expect(valid.creditCard(6799990100000000019)).to.be.true; // maestro
		});

		it('should return false if not passed a valid credit card number', function() {
			expect(valid.creditCard(1234123412341234)).to.be.false;
		});

	});


	describe('Integer', function() {

		it('should return false if not passed a number', function() {
			expect(valid.integer('10')).to.be.false;
		});

		it('should return true if passed an integer', function() {
			expect(valid.integer(1)).to.be.true;
			expect(valid.integer(0)).to.be.true;
			expect(valid.integer(-1)).to.be.true;
			expect(valid.integer(3.2e+33)).to.be.true;
			expect(valid.integer(-3.2e+33)).to.be.true;
		});

		it('should return false if not passed an integer', function() {
			expect(valid.integer(Infinity)).to.be.false;
			expect(valid.integer(NaN)).to.be.false;
			expect(valid.integer(1.5)).to.be.false;
			expect(valid.integer(-1.5)).to.be.false;
			expect(valid.integer(1e-7)).to.be.false;
		});

	});


	describe('Negative', function() {

		it('should return false if not passed a number', function() {
			expect(valid.negative('-20')).to.be.false;
		});

		it('should return true if passed a negative number', function() {
			expect(valid.negative(-Infinity)).to.be.true;
			expect(valid.negative(-1)).to.be.true;
			expect(valid.negative(-3.2e+33)).to.be.true;
			expect(valid.negative(-3200000000000000000000000000000000)).to.be.true;
		});

		it('should return false if not passed a negative number', function() {
			expect(valid.negative(Infinity)).to.be.false;
			expect(valid.negative(100)).to.be.false;
			expect(valid.negative(0)).to.be.false;
			expect(valid.negative(+0)).to.be.false;
			expect(valid.negative(-0)).to.be.false;
			expect(valid.negative(NaN)).to.be.false;
			expect(valid.negative(3.2e+33)).to.be.false;
			expect(valid.negative(3200000000000000000000000000000000)).to.be.false;
		});

	});

	describe('Positive', function() {

		it('should return false if not passed a number', function() {
			expect(valid.positive('20')).to.be.false;
		});

		it('should return true if passed a positive number', function() {
			expect(valid.positive(Infinity)).to.be.true;
			expect(valid.positive(1)).to.be.true;
			expect(valid.positive(3.2e+33)).to.be.true;
			expect(valid.positive(3200000000000000000000000000000000)).to.be.true;
		});

		it('should return false if not passed a positive number', function() {
			expect(valid.positive(-Infinity)).to.be.false;
			expect(valid.positive(-100)).to.be.false;
			expect(valid.positive(0)).to.be.false;
			expect(valid.positive(+0)).to.be.false;
			expect(valid.positive(-0)).to.be.false;
			expect(valid.positive(NaN)).to.be.false;
			expect(valid.positive(-3.2e+33)).to.be.false;
			expect(valid.positive(-3200000000000000000000000000000000)).to.be.false;
		});

	});


	describe('Zip Code', function() {

		it('should return false if not passed a number', function() {
			expect(valid.zipCode('89052')).to.be.false;
		});

		it('should return true if passed a valid US zip code', function() {
			expect(valid.zipCode(89052)).to.be.true;
			expect(valid.zipCode(890526589)).to.be.true;
		});

		it('should return false if not passed a valid US zip code', function() {
			expect(valid.zipCode(0)).to.be.false;
			expect(valid.zipCode(-89052)).to.be.false;
			expect(valid.zipCode(123456)).to.be.false;
		});

	});


});

