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
    email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
    creditCard: /^4[0-9]{12}(?:[0-9]{3})?$^5[1-5][0-9]{14}$|^3[47][0-9]{13}$|^389[0-9]{11}$|^3(?:0[0-5]|[68][0-9])[0-9]{11}$|^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$|^(?:2131|1800|35\d{3})\d{11}$|^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$|^(6304|6706|6709|6771)[0-9]{12,15}$|^(5018|5020|5038|6304|6759|6761|6763|6799)[0-9]{8,19}$|^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$|^(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}$|^(62[0-9]{14,17})$/,
    //----------|                   VISA                   |       AMEX     | CARTE BLANCHE|        DINERS CLUB CARD        |                                                          DISCOVER CARD                                                   |              JCB            |              VISA MASTER CARD               |             LASER CARD            |                   MAESTRO CARD                       |                             SOLO CARD                          |                                                                                      SWITCH CARD                                                                                                                           |    UNION PAY
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

// ----- private regexp test method
// ---------------------------------------
valid._testRegexp = function(regexp, str) {
	return this._regexps[regexp].test(str);
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


// ----- empty
// ---------------------------------------
valid.empty = function(str) {

	if (!this._isString(str)) {
		return false;
	}

	if (str !== '') {
		return false;
	}

	return true;

};


// ----- countChars
//		--	used in length & maxChars & minChars
// ---------------------------------------
valid._countChars = function(len, str, type) {

	if (!this._isNumber(len) || !this._isString(str)) {
		throw new Error('s-valid character methods expect two arguments (Number, String)');
	}

	if (isNaN(len)) {
		return false;
	}

	switch (type) {
		
		case 'max':
			if (str.length > len) {
				return false;
			}
			break;

		case 'min':
			if (str.length < len) {
				return false;
			}
			break;

		default:
			if (str.length !== len) {
				return false;
			}

	}

	return true;

};


// ----- length
// ---------------------------------------
valid.length = function(len, str) {

	if (arguments.length !== 2) {
		throw new Error('s-valid character methods expect two arguments (Number, String)');
	}

	return this._countChars(len, str);

};


// ----- maxChars
// ---------------------------------------
valid.maxChars = function(len, str) {

	if (arguments.length !== 2) {
		throw new Error('s-valid character methods expect two arguments (Number, String)');
	}

	return this._countChars(len, str, 'max');

};


// ----- minChars
// ---------------------------------------
valid.minChars = function(len, str) {

	if (arguments.length !== 2) {
		throw new Error('s-valid character methods expect two arguments (Number, String)');
	}

	return this._countChars(len, str, 'min');

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


// ----- notEmpty
// ---------------------------------------
valid.notEmpty = function(str) {

	if (!this._isString(str)) {
		return false;
	}

	if (str === '') {
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

	if (this.empty(str)) {
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


// ----- space
// ---------------------------------------
valid.space = function(str) {

	if (!this._isString(str)) {
		return false;
	}

	if (str !== ' ') {
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


// ----- credit card
// ---------------------------------------
valid.creditCard = function(n) {

	if (!this._isNumber(n)) {
		return false;
	}

	if (!this._testRegexp('creditCard', n)) {
		return false;
	}

	return true;

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