'use strict';

var valid = {};

// ----- Regexp checks from is_js
//		--	Modified url to include port: https://gist.github.com/dperini/729294
//		--	Modified affirmative to include 'on' and allowed any capitalization
//		--	Added negatory
//		--	Improved creditCard regexp allows for more card types
//				- http://stackoverflow.com/a/23231321
// ---------------------------------------
valid._regexps = {
  affirmative: /^(?:1|t(?:rue)?|y(?:es)?|on|ok(?:ay)?)$/,
  alphaNumeric: /^[A-Za-z0-9]+$/,
  creditCard: {
  	mastercardVisa: /^4[0-9]{12}(?:[0-9]{3})?$^5[1-5][0-9]{14}$|^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/,
  	amex: /^3[47][0-9]{13}$/,
  	carteBlanche: /^389[0-9]{11}$|^380[0-9]{11}$/,
  	dinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  	discover: /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/,
  	jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
  	lasercard: /^(6304|6706|6709|6771)[0-9]{12,15}$/,
  	maestro: /^(5018|5020|5038|6304|6759|6761|6763|6799)[0-9]{8,19}$/,
  	solo: /^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$|^(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}$/,
  	unionpay: /^(62[0-9]{14,17})$/
  },
  email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
  negatory: /^(?:1|f(?:alse)?|n(?:o)?|off)$/,
  url: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
  usZipCode: /^[0-9]{5}(?:[0-9]{4})?$/
};


// --------------------------------- string methods ---------------------------------

// ----- private typechecker method
// ---------------------------------------
valid._isString = function(str) {

	if (typeof str === 'string' || str instanceof String) {
		return true;
	}

	return false;

};

// ----- private regexp test methods
// ---------------------------------------
valid._testRegexp = function(regexp, str) {
	return this._regexps[regexp].test(str);
};

valid._testCardRegexp = function(regexp, n) {
	return this._regexps.creditCard[regexp].test(n);
};


// ----- affirmative
// ---------------------------------------
valid.affirmative = function(str) {

	if (!this._isString(str)) {
		return false;
	}

	if (!this._testRegexp('affirmative', str.toLowerCase())) {
		return false;
	}

	return true;

};


// ----- alphanumeric
// ---------------------------------------
valid.alphaNumeric = function(str) {

	if (!this._isString(str)) {
		return false;
	}

	if (!this._testRegexp('alphaNumeric', str)) {
		return false;
	}

	return true;

};


// ----- email
// ---------------------------------------
valid.email = function(str) {

	if (!this._isString(str)) {
		return false;
	}

	if (!this._testRegexp('email', str)) {
		return false;
	}

	return true;

};


// ----- negatory
// ---------------------------------------
valid.negatory = function(str) {

	if (!this._isString(str)) {
		return false;
	}

	if (!this._testRegexp('negatory', str.toLowerCase())) {
		return false;
	}

	return true;

};


// ----- numberString
// ---------------------------------------
valid.numberString = function(str) {

	if (!this._isString(str)) {
		return false;
	}

	if (str === '') {
		return false;
	}

	return !isNaN(str); // http://stackoverflow.com/a/175787

};


// ----- numberStringLoose
// ---------------------------------------
valid.numberStringLoose = function(str) {

	if (this._isString(str)) {

		str = str.replace(',', '');
		var numbers = ['0','1','2','3','4','5','6','7','8','9', '-', 'I'];
		
		// for $100 and #123, etc.
		if (numbers.indexOf(str[0]) === -1) {
			str = str.slice(1);
		}

	}

	else {
		return false;
	}

	if (isNaN(parseInt(str), 10)) {
		return false;
	}

	return true;

};


// ----- url
// ---------------------------------------
valid.url = function(str) {

	if (!this._isString(str)) {
		return false;
	}

	if (!this._testRegexp('url', str)) {
		return false;
	}

	return true;

};





// --------------------------------- number methods ---------------------------------

// ----- private typechecker method
// ---------------------------------------
valid._isNumber = function(str) {

	if (typeof str === 'number' || str instanceof Number) {
		return true;
	}

	return false;

};


// -------------- credit card methods --------------

// ----- credit card check constructor
// ---------------------------------------
function CreditCard(name) {

	return function(n) {

		if (!valid._isNumber(n)) {
			return false;
		}

		if (!valid._testCardRegexp(name, n)) {
			return false;
		}

		return true;

	};

}


// ----- specific card regexp validation
// ---------------------------------------
valid.card = {
	mastercardVisa: new CreditCard('mastercardVisa'),
	mastercard: new CreditCard('mastercardVisa'), // alias
	visa: new CreditCard('mastercardVisa'), // alias
	amex: new CreditCard('amex'),
	maestro: new CreditCard('maestro'),
	jcb: new CreditCard('jcb'),
	unionpay: new CreditCard('unionpay'),
	discover: new CreditCard('discover'),
	solo: new CreditCard('solo'),
	carteBlanche: new CreditCard('carteBlanche'),
	dinersClub: new CreditCard('dinersClub'),
	lasercard: new CreditCard('lasercard')
};


// ----- generic card validation
//		--	1. input must be number
//		--	2. input length must be valid
//		--	3. return true if any specific test passes
//		--	4. perform complex check based on number
// ---------------------------------------
valid.creditCard = valid.card.generic = function(n) {

	if (!valid._isNumber(n)) {
		return false;
	}

	var str = n.toString();

	// must be valid card length
	if (str.length < 13 || str.length > 19) {
		return false;
	}

	// should return true if any specific regexp tests pass
	for (var prop in valid._regexps.creditCard) {

		if (valid._regexps.creditCard.hasOwnProperty(prop)) {
			if (valid._regexps.creditCard[prop].test(n)) {
				return true;
			}
		}

	}

	// method of testing credit cards from 
	// http://ajax.aspnetcdn.com/ajax/jquery.validate/1.13.1/jquery.validate.js
	var testNumber = 0;

	for (var i = str.length - 1, current, currentInteger = 0, even = false; i>=0; i--) {
		
		current = str.charAt(i);
		currentInteger = parseInt(current, 10);

		if (even && (currentInteger *= 2) > 9 ) {
			currentInteger -= 9;
		}

		testNumber += currentInteger;
		even = !even;
	}

	return (testNumber % 10) === 0;

};


// ----- integer
// ---------------------------------------
valid.integer = function(n) {

	if (!this._isNumber(n)) {
		return false;
	}

	// if (isNaN(n)) {
	// 	return false;
	// }

	return n % 1 === 0; 

};

// ----- negative
// ---------------------------------------
valid.negative = function(n) {

	if (!this._isNumber(n)) {
		return false;
	}

	// n >= 0 does not pass for NaN
	if (!(n < 0)) {
		return false;
	}

	return true;

};


// ----- positive
// ---------------------------------------
valid.positive = function(n) {

	if (!this._isNumber(n)) {
		return false;
	}

	// n <= 0 does not pass for NaN
	if (!(n > 0)) {
		return false;
	}

	return true;

};


// ----- zip code
// ---------------------------------------
valid.zipCode = function(n) {

	if (!this._isNumber(n)) {
		return false;
	}

	if (!this._testRegexp('usZipCode', n)) {
		return false;
	}

	return true;

};

module.exports = valid;