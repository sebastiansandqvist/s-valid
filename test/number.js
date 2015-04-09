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
				expect(valid.card.generic('')).to.be.false;
			});

			it('should return true if passed a valid credit card number', function() {
				expect(valid.card.generic(4222222222222)).to.be.true;    // visa
				expect(valid.card.generic(4111111111111111)).to.be.true; // visa
				expect(valid.card.generic(4242424242424242)).to.be.true; // visa
				expect(valid.card.generic(378282246310005)).to.be.true;  // amex
				expect(valid.card.generic(371449635398431)).to.be.true;  // amex
				expect(valid.card.generic(378734493671000)).to.be.true;  // amex corporate
				expect(valid.card.generic(6011111111111117)).to.be.true; // discover
				expect(valid.card.generic(6011000990139424)).to.be.true; // discover
				expect(valid.card.generic(5555555555554444)).to.be.true; // mastercard
				expect(valid.card.generic(5105105105105100)).to.be.true; // mastercard
				expect(valid.card.generic(3530111333300000)).to.be.true; // jcb
				expect(valid.card.generic(3566002020360505)).to.be.true; // jcb
				expect(valid.card.generic(6331101999990016)).to.be.true; // switch / solo
				expect(valid.card.generic(38000000000006)).to.be.true;   // carte blanche
				expect(valid.card.generic(30569309025904)).to.be.true;   // diners club
				expect(valid.card.generic(38520000023237)).to.be.true;   // diners club
				expect(valid.card.generic(6304850000000040)).to.be.true; // laser card
				expect(valid.card.generic(6304850000000602)).to.be.true; // laser card
				expect(valid.card.generic(6240008631401148)).to.be.true; // unionpay
				expect(valid.card.generic(6759649826438453)).to.be.true; // maestro
				expect(valid.card.generic(6759000000000000)).to.be.true; // maestro uk
				expect(valid.card.generic(6799990100000000019)).to.be.true; // maestro
				expect(valid.card.generic(5610591081018250)).to.be.true; // australian bankcard (not in any regexp)
			});

			it('should return false if not passed a valid credit card number', function() {
				expect(valid.card.generic(1234123412341234)).to.be.false;
			});

			it('should be aliased to valid.creditCard()', function() {
				// TODO
			});

		});

		describe('MasterCard / Visa', function() {
			it('should only work for visa cards', function() {
				expect(valid.card.mastercardVisa(4222222222222)).to.be.true;    // visa
				expect(valid.card.mastercardVisa(4111111111111111)).to.be.true; // visa
				expect(valid.card.mastercardVisa(4242424242424242)).to.be.true; // visa
				expect(valid.card.mastercardVisa(5555555555554444)).to.be.true; // mastercard
				expect(valid.card.mastercardVisa(5105105105105100)).to.be.true; // mastercard
				expect(valid.card.mastercardVisa(378282246310005)).to.be.false; // amex
			});
		});

		describe('Aliases for MasterCard / Visa', function() {
			it('should still work', function() {
				expect(valid.card.visa(4222222222222)).to.be.true;    // visa
				expect(valid.card.visa(4111111111111111)).to.be.true; // visa
				expect(valid.card.visa(4242424242424242)).to.be.true; // visa
				expect(valid.card.visa(5555555555554444)).to.be.true; // mastercard
				expect(valid.card.visa(5105105105105100)).to.be.true; // mastercard
				expect(valid.card.visa(378282246310005)).to.be.false; // amex
				expect(valid.card.mastercard(4222222222222)).to.be.true;    // visa
				expect(valid.card.mastercard(4111111111111111)).to.be.true; // visa
				expect(valid.card.mastercard(4242424242424242)).to.be.true; // visa
				expect(valid.card.mastercard(5555555555554444)).to.be.true; // mastercard
				expect(valid.card.mastercard(5105105105105100)).to.be.true; // mastercard
				expect(valid.card.mastercard(378282246310005)).to.be.false; // amex
			});
		});

		describe('Amex', function() {
			it('should only work for amex cards', function() {
				expect(valid.card.amex(378282246310005)).to.be.true;   // amex
				expect(valid.card.amex(371449635398431)).to.be.true;   // amex
				expect(valid.card.amex(378734493671000)).to.be.true;   // amex corporate			
				expect(valid.card.amex(4111111111111111)).to.be.false; // visa
			});
		});

		describe('Discover', function() {
			it('should only work for discover cards', function() {
				expect(valid.card.discover(6011111111111117)).to.be.true;  // discover
				expect(valid.card.discover(6011000990139424)).to.be.true;  // discover
				expect(valid.card.discover(4111111111111111)).to.be.false; // visa
			});
		});

		describe('JCB', function() {
			it('should only work for jcb cards', function() {
				expect(valid.card.jcb(3530111333300000)).to.be.true;  // jcb
				expect(valid.card.jcb(3566002020360505)).to.be.true;  // jcb		
				expect(valid.card.jcb(4111111111111111)).to.be.false; // visa
			});
		});

		describe('Switch/Solo', function() {
			it('should only work for switch/solo cards', function() {
				expect(valid.card.solo(6331101999990016)).to.be.true;  // switch / solo
				expect(valid.card.solo(4111111111111111)).to.be.false; // visa
			});
		});

		describe('Carte Blanche', function() {
			it('should only work for carte blanche cards', function() {
				expect(valid.card.carteBlanche(38000000000006)).to.be.true;    // carte blanche
				expect(valid.card.carteBlanche(4111111111111111)).to.be.false; // visa
			});
		});

		describe('Diners Club', function() {
			it('should only work for diners club cards', function() {
				expect(valid.card.dinersClub(30569309025904)).to.be.true;   // diners club
				expect(valid.card.dinersClub(38520000023237)).to.be.true;   // diners club
				expect(valid.card.dinersClub(4111111111111111)).to.be.false; // visa
			});
		});

		describe('Laser Card', function() {
			it('should only work for laser card cards', function() {
				expect(valid.card.lasercard(6304850000000040)).to.be.true; // laser card
				expect(valid.card.lasercard(6304850000000602)).to.be.true; // laser card
				expect(valid.card.lasercard(4111111111111111)).to.be.false; // visa
			});
		});

		describe('Unionpay', function() {
			it('should only work for unionpay cards', function() {
				expect(valid.card.unionpay(6240008631401148)).to.be.true; // unionpay
				expect(valid.card.unionpay(4111111111111111)).to.be.false; // visa
			});
		});

		describe('Maestro', function() {
			it('should only work for maestro cards', function() {
				expect(valid.card.maestro(6759649826438453)).to.be.true; // maestro
				expect(valid.card.maestro(6759000000000000)).to.be.true; // maestro uk
				expect(valid.card.maestro(6799990100000000019)).to.be.true; // maestro
				expect(valid.card.maestro(4111111111111111)).to.be.false; // visa
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

