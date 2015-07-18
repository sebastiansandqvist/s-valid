// ----- dependencies
// ---------------------------------------
require('blanket')({
	pattern: function (filename) {
		return !/node_modules/.test(filename);
	}
});

var expect = require('chai').expect;
var valid = require('../index.js');


// ----- tests
// ---------------------------------------
describe('String', function() {

	describe('Affirmative', function() {

		it('should throw if not passed a string', function() {
			expect(function() {
				valid.affirmative(5);
			}).to.throw();
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

		it('should throw if not passed a string', function() {
			expect(function() {
				valid.alphaNumeric(5)
			}).to.throw();
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


	describe('Alpha (alphabetic)', function() {

		it('should throw if not passed a string', function() {
			expect(function() {
				valid.alpha(5)
			}).to.throw();
		});

		it('should return true if passed a valid alphabetic string', function() {
			expect(valid.alpha('test')).to.be.true;
			expect(valid.alpha('TEST')).to.be.true;
		});

		it('should return false if not passed a valid alphabetic string', function() {
			expect(valid.alpha('')).to.be.false;
			expect(valid.alpha('12345TEST12345')).to.be.false;
			expect(valid.alpha('12345')).to.be.false;
			expect(valid.alpha('à')).to.be.false;
			expect(valid.alpha('Tést')).to.be.false;
			expect(valid.alpha('$')).to.be.false;
			expect(valid.alpha('asd$123')).to.be.false;
			expect(valid.alpha('asd-123')).to.be.false;
			expect(valid.alpha('asd_123')).to.be.false;
			expect(valid.alpha('asd 123')).to.be.false;
			expect(valid.alpha(' test')).to.be.false;
			expect(valid.alpha('asd asd')).to.be.false;
			expect(valid.alpha('asd@123')).to.be.false;
			expect(valid.alpha('asd.')).to.be.false;
		});

	});


	describe('Email', function() {

		it('should throw if not passed a string', function() {
			expect(function() {
				valid.email(5)
			}).to.throw();
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


	describe('Negatory', function() {

		it('should throw if not passed a string', function() {
			expect(function() {
				valid.negatory(0)
			}).to.throw();
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


	describe('Numeric String', function() {

		it('should throw if not passed a string', function() {
			expect(function() {
				valid.numeric(5)
			}).to.throw();
		});

		it('should return true if passed a valid number string', function() {
			expect(valid.numeric('0')).to.be.true;
			expect(valid.numeric('123')).to.be.true;
			expect(valid.numeric('-123')).to.be.true;
			expect(valid.numeric('123.123')).to.be.true;
		});

		it('should return false if passed a bad string', function() {
			expect(valid.numeric('')).to.be.false;
			expect(valid.numeric('test')).to.be.false;
			expect(valid.numeric('123px')).to.be.false;
			expect(valid.numeric('123%')).to.be.false;
			expect(valid.numeric('$123')).to.be.false;
			expect(valid.numeric('123,000')).to.be.false;
			expect(valid.numeric('123.123.123')).to.be.false;
		});

	});


	describe('Value String', function() {

		it('should throw if not passed a string', function() {
			expect(function() {
				valid.value(5)
			}).to.throw();
		});

		it('should return true if passed a valid number string', function() {
			expect(valid.value('0')).to.be.true;
			expect(valid.value('-0')).to.be.true;
			expect(valid.value('+0')).to.be.true;
			expect(valid.value('123')).to.be.true;
			expect(valid.value('-123')).to.be.true;
			expect(valid.value('+123')).to.be.true;
			expect(valid.value('123.123')).to.be.true;
			expect(valid.value('123px')).to.be.true;
			expect(valid.value('123BTC')).to.be.true;
			expect(valid.value('123 BTC')).to.be.true;
			expect(valid.value('123%')).to.be.true;
			expect(valid.value('$123')).to.be.true;
			expect(valid.value('123-123')).to.be.true;
			expect(valid.value('123,000')).to.be.true;
			expect(valid.value('123,000.00')).to.be.true;
			expect(valid.value('(123)')).to.be.true;
			expect(valid.value('#000000')).to.be.true;
		});

		it('should return false if passed a bad string', function() {
			expect(valid.value('')).to.be.false;
			expect(valid.value('NaN')).to.be.false;
			expect(valid.value('test')).to.be.false;
			expect(valid.value('te123st')).to.be.false;
			expect(valid.value('Infinity')).to.be.false;
			expect(valid.value('-')).to.be.false;
			expect(valid.value('+')).to.be.false;
		});

	});


	describe('URL', function() {

		it('should throw if not passed a string', function() {
			expect(function() {
				valid.url(5)
			}).to.throw();
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

	describe('Zip Code', function() {

		it('should throw if not passed a string', function() {
			expect(function() {
				valid.zipCode(5)
			}).to.throw();
		});

		it('should return true if passed a valid US zip code', function() {
			expect(valid.zipCode('89052')).to.be.true;
			expect(valid.zipCode('01001')).to.be.true;
			expect(valid.zipCode('00501')).to.be.true;
		});

		it('should return false if not passed a valid US zip code', function() {
			expect(valid.zipCode('0')).to.be.false;
			expect(valid.zipCode('foo')).to.be.false;
			expect(valid.zipCode('00000')).to.be.false;
			expect(valid.zipCode('00001')).to.be.false;
			expect(valid.zipCode('00500')).to.be.false;
			expect(valid.zipCode('-89052')).to.be.false;
			expect(valid.zipCode('89052-')).to.be.false;
			expect(valid.zipCode('89052-658')).to.be.false;
			expect(valid.zipCode('890526589')).to.be.false;
			expect(valid.zipCode('123456')).to.be.false;
			expect(valid.zipCode('01001-6589')).to.be.false;
			expect(valid.zipCode('00501-6589')).to.be.false;
			expect(valid.zipCode('89052-6589')).to.be.false;
		});

	});

	describe('Zip Code + 4', function() {

		it('should throw if not passed a string', function() {
			expect(function() {
				valid.zipCodeLong(5)
			}).to.throw();
		});

		it('should return true if passed a valid US zip code', function() {
			expect(valid.zipCodeLong('89052')).to.be.true;
			expect(valid.zipCodeLong('01001')).to.be.true;
			expect(valid.zipCodeLong('00501')).to.be.true;
			expect(valid.zipCodeLong('01001-6589')).to.be.true;
			expect(valid.zipCodeLong('00501-6589')).to.be.true;
			expect(valid.zipCodeLong('89052-6589')).to.be.true;
		});

		it('should return false if not passed a valid US zip code', function() {
			expect(valid.zipCodeLong('0')).to.be.false;
			expect(valid.zipCodeLong('foo')).to.be.false;
			expect(valid.zipCodeLong('00000')).to.be.false;
			expect(valid.zipCodeLong('00001')).to.be.false;
			expect(valid.zipCodeLong('00500')).to.be.false;
			expect(valid.zipCodeLong('-89052')).to.be.false;
			expect(valid.zipCodeLong('89052-')).to.be.false;
			expect(valid.zipCodeLong('89052-658')).to.be.false;
			expect(valid.zipCodeLong('890526589')).to.be.false;
			expect(valid.zipCodeLong('123456')).to.be.false;
		});

	});



});






// ----- number tests
// ---------------------------------------
describe('Number', function() {

	describe('Credit Card', function() {

		describe('Generic type', function() {

			it('should throw if not passed a string', function() {
				expect(function() {
					valid.card.generic(5)
				}).to.throw();
			});

			it('should return true if passed a valid credit card number', function() {
				expect(valid.card.generic('4222222222222')).to.be.true;    // visa
				expect(valid.card.generic('4111111111111111')).to.be.true; // visa
				expect(valid.card.generic('4242424242424242')).to.be.true; // visa
				expect(valid.card.generic('378282246310005')).to.be.true;  // amex
				expect(valid.card.generic('371449635398431')).to.be.true;  // amex
				expect(valid.card.generic('378734493671000')).to.be.true;  // amex corporate
				expect(valid.card.generic('6011111111111117')).to.be.true; // discover
				expect(valid.card.generic('6011000990139424')).to.be.true; // discover
				expect(valid.card.generic('5555555555554444')).to.be.true; // mastercard
				expect(valid.card.generic('5105105105105100')).to.be.true; // mastercard
				expect(valid.card.generic('3530111333300000')).to.be.true; // jcb
				expect(valid.card.generic('3566002020360505')).to.be.true; // jcb
				expect(valid.card.generic('6331101999990016')).to.be.true; // switch / solo
				expect(valid.card.generic('38000000000006')).to.be.true;   // carte blanche
				expect(valid.card.generic('30569309025904')).to.be.true;   // diners club
				expect(valid.card.generic('38520000023237')).to.be.true;   // diners club
				expect(valid.card.generic('6304850000000040')).to.be.true; // laser card
				expect(valid.card.generic('6304850000000602')).to.be.true; // laser card
				expect(valid.card.generic('6240008631401148')).to.be.true; // unionpay
				expect(valid.card.generic('6759649826438453')).to.be.true; // maestro
				expect(valid.card.generic('6759000000000000')).to.be.true; // maestro uk
				expect(valid.card.generic('6799990100000000019')).to.be.true; // maestro
				expect(valid.card.generic('5610591081018250')).to.be.true; // australian bankcard (not in any regexp)
			});

			it('should return false if not passed a valid credit card number', function() {
				expect(valid.card.generic('1234123412341234')).to.be.false;
				expect(valid.card.generic('1')).to.be.false;
				expect(valid.card.generic('123456789012345678901234567890')).to.be.false;
			});

			it('should be aliased to valid.creditCard()', function() {
				expect(valid.creditCard('4222222222222')).to.be.true;    // visa
				expect(valid.creditCard('4111111111111111')).to.be.true; // visa
				expect(valid.creditCard('4242424242424242')).to.be.true; // visa
				expect(valid.creditCard('378282246310005')).to.be.true;  // amex
				expect(valid.creditCard('371449635398431')).to.be.true;  // amex
				expect(valid.creditCard('378734493671000')).to.be.true;  // amex corporate
				expect(valid.creditCard('6011111111111117')).to.be.true; // discover
				expect(valid.creditCard('6011000990139424')).to.be.true; // discover
				expect(valid.creditCard('5555555555554444')).to.be.true; // mastercard
				expect(valid.creditCard('5105105105105100')).to.be.true; // mastercard
				expect(valid.creditCard('3530111333300000')).to.be.true; // jcb
				expect(valid.creditCard('3566002020360505')).to.be.true; // jcb
				expect(valid.creditCard('6331101999990016')).to.be.true; // switch / solo
				expect(valid.creditCard('38000000000006')).to.be.true;   // carte blanche
				expect(valid.creditCard('30569309025904')).to.be.true;   // diners club
				expect(valid.creditCard('38520000023237')).to.be.true;   // diners club
				expect(valid.creditCard('6304850000000040')).to.be.true; // laser card
				expect(valid.creditCard('6304850000000602')).to.be.true; // laser card
				expect(valid.creditCard('6240008631401148')).to.be.true; // unionpay
				expect(valid.creditCard('6759649826438453')).to.be.true; // maestro
				expect(valid.creditCard('6759000000000000')).to.be.true; // maestro uk
				expect(valid.creditCard('6799990100000000019')).to.be.true; // maestro
				expect(valid.creditCard('5610591081018250')).to.be.true; // australian bankcard (not in any regexp)
				
				expect(function() {
					valid.creditCard(5)
				}).to.throw();

				expect(valid.creditCard('1234123412341234')).to.be.false;
				expect(valid.creditCard('1')).to.be.false;
				expect(valid.creditCard('123456789012345678901234567890')).to.be.false;
			});

		});

		describe('Mastercard', function() {
			it('should only work for mastercard cards', function() {
				expect(valid.card.mastercard('5555555555554444')).to.be.true;  // mastercard
				expect(valid.card.mastercard('5105105105105100')).to.be.true;  // mastercard
				expect(valid.card.mastercard('4222222222222')).to.be.false;    // visa
				expect(valid.card.mastercard('4111111111111111')).to.be.false; // visa
				expect(valid.card.mastercard('4242424242424242')).to.be.false; // visa
				expect(valid.card.mastercard('378282246310005')).to.be.false;  // amex
			});
		});

		describe('Visa', function() {
			it('should only work for visa cards', function() {
				expect(valid.card.visa('4222222222222')).to.be.true;    // visa
				expect(valid.card.visa('4111111111111111')).to.be.true; // visa
				expect(valid.card.visa('4242424242424242')).to.be.true; // visa
				expect(valid.card.visa('5555555555554444')).to.be.false; // mastercard
				expect(valid.card.visa('5105105105105100')).to.be.false; // mastercard
				expect(valid.card.visa('378282246310005')).to.be.false; // amex
			});
		});

		describe('Amex', function() {
			it('should only work for amex cards', function() {
				expect(valid.card.amex('378282246310005')).to.be.true;   // amex
				expect(valid.card.amex('371449635398431')).to.be.true;   // amex
				expect(valid.card.amex('378734493671000')).to.be.true;   // amex corporate			
				expect(valid.card.amex('4111111111111111')).to.be.false; // visa
			});
		});

		describe('Discover', function() {
			it('should only work for discover cards', function() {
				expect(valid.card.discover('6011111111111117')).to.be.true;  // discover
				expect(valid.card.discover('6011000990139424')).to.be.true;  // discover
				expect(valid.card.discover('4111111111111111')).to.be.false; // visa
			});
		});

		describe('JCB', function() {
			it('should only work for jcb cards', function() {
				expect(valid.card.jcb('3530111333300000')).to.be.true;  // jcb
				expect(valid.card.jcb('3566002020360505')).to.be.true;  // jcb		
				expect(valid.card.jcb('4111111111111111')).to.be.false; // visa
			});
		});

		describe('Switch/Solo', function() {
			it('should only work for switch/solo cards', function() {
				expect(valid.card.solo('6331101999990016')).to.be.true;  // switch / solo
				expect(valid.card.solo('4111111111111111')).to.be.false; // visa
			});
		});

		describe('Carte Blanche', function() {
			it('should only work for carte blanche cards', function() {
				expect(valid.card.carteBlanche('38000000000006')).to.be.true;    // carte blanche
				expect(valid.card.carteBlanche('4111111111111111')).to.be.false; // visa
			});
		});

		describe('Diners Club', function() {
			it('should only work for diners club cards', function() {
				expect(valid.card.dinersClub('30569309025904')).to.be.true;   // diners club
				expect(valid.card.dinersClub('38520000023237')).to.be.true;   // diners club
				expect(valid.card.dinersClub('4111111111111111')).to.be.false; // visa
			});
		});

		describe('Laser Card', function() {
			it('should only work for laser card cards', function() {
				expect(valid.card.lasercard('6304850000000040')).to.be.true; // laser card
				expect(valid.card.lasercard('6304850000000602')).to.be.true; // laser card
				expect(valid.card.lasercard('4111111111111111')).to.be.false; // visa
			});
		});

		describe('Unionpay', function() {
			it('should only work for unionpay cards', function() {
				expect(valid.card.unionpay('6240008631401148')).to.be.true; // unionpay
				expect(valid.card.unionpay('4111111111111111')).to.be.false; // visa
			});
		});

		describe('Maestro', function() {
			it('should only work for maestro cards', function() {
				expect(valid.card.maestro('6759649826438453')).to.be.true; // maestro
				expect(valid.card.maestro('6759000000000000')).to.be.true; // maestro uk
				expect(valid.card.maestro('6799990100000000019')).to.be.true; // maestro
				expect(valid.card.maestro('4111111111111111')).to.be.false; // visa
			});
		});

	});

});

describe('Modularity', function() {

	it('should still work for affirmative', function() {
		var affirmative = require('../').affirmative;
		expect(affirmative('yes')).to.be.true;
		expect(affirmative('no')).to.be.false;
	});

	it('should still work for alpha', function() {
		var alpha = require('../').alpha;
		expect(alpha('test')).to.be.true;
		expect(alpha('test123')).to.be.false;
	});

	it('should still work for alphaNumeric', function() {
		var alphaNumeric = require('../').alphaNumeric;
		expect(alphaNumeric('test123')).to.be.true;
		expect(alphaNumeric('$')).to.be.false;
	});

	it('should still work for email', function() {
		var email = require('../').email;
		expect(email('test@test.com')).to.be.true;
		expect(email('test@test')).to.be.false;
	});

	it('should still work for negatory', function() {
		var negatory = require('../').negatory;
		expect(negatory('no')).to.be.true;
		expect(negatory('yes')).to.be.false;
	});

	it('should still work for numeric', function() {
		var numeric = require('../').numeric;
		expect(numeric('123')).to.be.true;
		expect(numeric('test123')).to.be.false;
	});

	it('should still work for value', function() {
		var value = require('../').value;
		expect(value('123px')).to.be.true;
		expect(value('test123')).to.be.false;
	});

	it('should still work for url', function() {
		var url = require('../').url;
		expect(url('http://google.com')).to.be.true;
		expect(url('http://google')).to.be.false;
	});

	it('should still work for zipCode', function() {
		var zipCode = require('../').zipCode;
		expect(zipCode('89052')).to.be.true;
		expect(zipCode('89052-6589')).to.be.false;
	});

	it('should still work for zipCode + 4', function() {
		var zipCodeLong = require('../').zipCodeLong;
		expect(zipCodeLong('89052-6589')).to.be.true;
		expect(zipCodeLong('123456')).to.be.false;
	});

	describe('Credit Cards', function() {

		it('should still work for aliased generic card type', function() {
			var creditCard = require('../').creditCard;
			expect(creditCard('4242424242424242')).to.be.true;
			expect(creditCard('1234123412341234')).to.be.false;
		});

		it('should still work for generic card type', function() {
			var creditCardGeneric = require('../').card.generic;
			expect(creditCardGeneric('4242424242424242')).to.be.true;
			expect(creditCardGeneric('1234123412341234')).to.be.false;
		});

		it('should still work for mastercard', function() {
			var mastercard = require('../').card.mastercard;
			expect(mastercard('5555555555554444')).to.be.true;
			expect(mastercard('4242424242424242')).to.be.false;
		});

		it('should still work for visa', function() {
			var visa = require('../').card.visa;
			expect(visa('4242424242424242')).to.be.true;
			expect(visa('5555555555554444')).to.be.false;
		});

		it('should still work for amex', function() {
			var amex = require('../').card.amex;
			expect(amex('378282246310005')).to.be.true;
			expect(amex('4242424242424242')).to.be.false;
		});

		it('should still work for carteBlanche', function() {
			var carteBlanche = require('../').card.carteBlanche;
			expect(carteBlanche('38000000000006')).to.be.true;
			expect(carteBlanche('4242424242424242')).to.be.false;
		});

		it('should still work for dinersClub', function() {
			var dinersClub = require('../').card.dinersClub;
			expect(dinersClub('30569309025904')).to.be.true;
			expect(dinersClub('4242424242424242')).to.be.false;
		});

		it('should still work for discover', function() {
			var discover = require('../').card.discover;
			expect(discover('6011111111111117')).to.be.true;
			expect(discover('4242424242424242')).to.be.false;
		});

		it('should still work for jcb', function() {
			var jcb = require('../').card.jcb;
			expect(jcb('3530111333300000')).to.be.true;
			expect(jcb('4242424242424242')).to.be.false;
		});

		it('should still work for maestro', function() {
			var maestro = require('../').card.maestro;
			expect(maestro('6759649826438453')).to.be.true;
			expect(maestro('4242424242424242')).to.be.false;
		});

		it('should still work for solo', function() {
			var solo = require('../').card.solo;
			expect(solo('6331101999990016')).to.be.true;
			expect(solo('4242424242424242')).to.be.false;
		});

		it('should still work for lasercard', function() {
			var lasercard = require('../').card.lasercard;
			expect(lasercard('6304850000000040')).to.be.true;
			expect(lasercard('4242424242424242')).to.be.false;
		});

		it('should still work for unionpay', function() {
			var unionpay = require('../').card.unionpay;
			expect(unionpay('6240008631401148')).to.be.true;
			expect(unionpay('4242424242424242')).to.be.false;
		});

		it('should still work when `card` is required', function() {
			var card = require('../').card;
			expect(card.generic('4242424242424242')).to.be.true;
			expect(card.generic('1234123412341234')).to.be.false;
			expect(card.mastercard('5555555555554444')).to.be.true;
			expect(card.mastercard('4242424242424242')).to.be.false;
		})

	});

	it('should work when a file is required', function() {
		var email = require('../email');
		expect(email('email@email.com')).to.be.true;
		expect(email('email@email.')).to.be.false;

		var card = require('../card');
		expect(card.visa('4242424242424242')).to.be.true;
		expect(card.visa('1234')).to.be.false;

	});

});