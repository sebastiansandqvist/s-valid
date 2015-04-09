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


	describe('_testCardRegexp', function() {

		it('should have testable regexps', function() {
			expect(valid._regexps.creditCard['mastercardVisa'].test('4111111111111111')).to.be.true;
			expect(valid._regexps.creditCard['mastercardVisa'].test('1234123412341234')).to.be.false;
		});

		it('should return true if passing a regexp test', function() {
			expect(valid._testCardRegexp('mastercardVisa', '4111111111111111')).to.be.true;
		});

		it('should return false if failing a regexp test', function() {
			expect(valid._testCardRegexp('mastercardVisa', '4111111111111111')).to.be.true;
		});

	});

	describe('Credit Card', function() {

		describe('Generic type', function() {

			it('should return false if not passed a number', function() {
				expect(valid.creditCard.generic('')).to.be.false;
			});

			it('should return true if passed a valid credit card number', function() {
				expect(valid.creditCard.generic(4222222222222)).to.be.true;    // visa
				expect(valid.creditCard.generic(4111111111111111)).to.be.true; // visa
				expect(valid.creditCard.generic(4242424242424242)).to.be.true; // visa
				expect(valid.creditCard.generic(378282246310005)).to.be.true;  // amex
				expect(valid.creditCard.generic(371449635398431)).to.be.true;  // amex
				expect(valid.creditCard.generic(378734493671000)).to.be.true;  // amex corporate
				expect(valid.creditCard.generic(6011111111111117)).to.be.true; // discover
				expect(valid.creditCard.generic(6011000990139424)).to.be.true; // discover
				expect(valid.creditCard.generic(5555555555554444)).to.be.true; // mastercard
				expect(valid.creditCard.generic(5105105105105100)).to.be.true; // mastercard
				expect(valid.creditCard.generic(3530111333300000)).to.be.true; // jcb
				expect(valid.creditCard.generic(3566002020360505)).to.be.true; // jcb
				expect(valid.creditCard.generic(6331101999990016)).to.be.true; // switch / solo
				expect(valid.creditCard.generic(38000000000006)).to.be.true;   // carte blanche
				expect(valid.creditCard.generic(30569309025904)).to.be.true;   // diners club
				expect(valid.creditCard.generic(38520000023237)).to.be.true;   // diners club
				expect(valid.creditCard.generic(6304850000000040)).to.be.true; // laser card
				expect(valid.creditCard.generic(6304850000000602)).to.be.true; // laser card
				expect(valid.creditCard.generic(6240008631401148)).to.be.true; // unionpay
				expect(valid.creditCard.generic(6759649826438453)).to.be.true; // maestro
				expect(valid.creditCard.generic(6759000000000000)).to.be.true; // maestro uk
				expect(valid.creditCard.generic(6799990100000000019)).to.be.true; // maestro
			});

			it('should return false if not passed a valid credit card number', function() {
				expect(valid.creditCard.generic(1234123412341234)).to.be.false;
			});

		});

		describe('MasterCard / Visa', function() {
			it('should only work for visa cards', function() {
				expect(valid.creditCard.mastercardVisa(4222222222222)).to.be.true;    // visa
				expect(valid.creditCard.mastercardVisa(4111111111111111)).to.be.true; // visa
				expect(valid.creditCard.mastercardVisa(4242424242424242)).to.be.true; // visa
				expect(valid.creditCard.mastercardVisa(5555555555554444)).to.be.true; // mastercard
				expect(valid.creditCard.mastercardVisa(5105105105105100)).to.be.true; // mastercard
				expect(valid.creditCard.mastercardVisa(378282246310005)).to.be.false; // amex
			});
		});

		describe('Aliases for MasterCard / Visa', function() {
			it('should still work', function() {
				expect(valid.creditCard.visa(4222222222222)).to.be.true;    // visa
				expect(valid.creditCard.visa(4111111111111111)).to.be.true; // visa
				expect(valid.creditCard.visa(4242424242424242)).to.be.true; // visa
				expect(valid.creditCard.visa(5555555555554444)).to.be.true; // mastercard
				expect(valid.creditCard.visa(5105105105105100)).to.be.true; // mastercard
				expect(valid.creditCard.visa(378282246310005)).to.be.false; // amex
				expect(valid.creditCard.mastercard(4222222222222)).to.be.true;    // visa
				expect(valid.creditCard.mastercard(4111111111111111)).to.be.true; // visa
				expect(valid.creditCard.mastercard(4242424242424242)).to.be.true; // visa
				expect(valid.creditCard.mastercard(5555555555554444)).to.be.true; // mastercard
				expect(valid.creditCard.mastercard(5105105105105100)).to.be.true; // mastercard
				expect(valid.creditCard.mastercard(378282246310005)).to.be.false; // amex
			});
		});

		describe('Amex', function() {
			it('should only work for amex cards', function() {
				expect(valid.creditCard.amex(378282246310005)).to.be.true;   // amex
				expect(valid.creditCard.amex(371449635398431)).to.be.true;   // amex
				expect(valid.creditCard.amex(378734493671000)).to.be.true;   // amex corporate			
				expect(valid.creditCard.amex(4111111111111111)).to.be.false; // visa
			});
		});

		describe('Discover', function() {
			it('should only work for discover cards', function() {
				expect(valid.creditCard.discover(6011111111111117)).to.be.true;  // discover
				expect(valid.creditCard.discover(6011000990139424)).to.be.true;  // discover
				expect(valid.creditCard.discover(4111111111111111)).to.be.false; // visa
			});
		});

		describe('JCB', function() {
			it('should only work for jcb cards', function() {
				expect(valid.creditCard.jcb(3530111333300000)).to.be.true;  // jcb
				expect(valid.creditCard.jcb(3566002020360505)).to.be.true;  // jcb		
				expect(valid.creditCard.jcb(4111111111111111)).to.be.false; // visa
			});
		});

		describe('Switch/Solo', function() {
			it('should only work for switch/solo cards', function() {
				expect(valid.creditCard.solo(6331101999990016)).to.be.true;  // switch / solo
				expect(valid.creditCard.solo(4111111111111111)).to.be.false; // visa
			});
		});

		describe('Carte Blanche', function() {
			it('should only work for carte blanche cards', function() {
				expect(valid.creditCard.carteBlanche(38000000000006)).to.be.true;    // carte blanche
				expect(valid.creditCard.carteBlanche(4111111111111111)).to.be.false; // visa
			});
		});

		describe('Diners Club', function() {
			it('should only work for diners club cards', function() {
				expect(valid.creditCard.dinersClub(30569309025904)).to.be.true;   // diners club
				expect(valid.creditCard.dinersClub(38520000023237)).to.be.true;   // diners club
				expect(valid.creditCard.dinersClub(4111111111111111)).to.be.false; // visa
			});
		});

		describe('Laser Card', function() {
			it('should only work for laser card cards', function() {
				expect(valid.creditCard.lasercard(6304850000000040)).to.be.true; // laser card
				expect(valid.creditCard.lasercard(6304850000000602)).to.be.true; // laser card
				expect(valid.creditCard.lasercard(4111111111111111)).to.be.false; // visa
			});
		});

		describe('Unionpay', function() {
			it('should only work for unionpay cards', function() {
				expect(valid.creditCard.unionpay(6240008631401148)).to.be.true; // unionpay
				expect(valid.creditCard.unionpay(4111111111111111)).to.be.false; // visa
			});
		});

		describe('Maestro', function() {
			it('should only work for maestro cards', function() {
				expect(valid.creditCard.maestro(6759649826438453)).to.be.true; // maestro
				expect(valid.creditCard.maestro(6759000000000000)).to.be.true; // maestro uk
				expect(valid.creditCard.maestro(6799990100000000019)).to.be.true; // maestro
				expect(valid.creditCard.maestro(4111111111111111)).to.be.false; // visa
			});
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

