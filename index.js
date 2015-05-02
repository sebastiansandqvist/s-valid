'use strict';

var valid = module.exports = {};


// ----- affirmative
// ---------------------------------------
valid.affirmative = function(str) {

	var regex = /^(?:1|t(?:rue)?|y(?:es)?|on|ok(?:ay)?)$/;

	return regex.test(str.toLowerCase());

};


// ----- alphanumeric
// ---------------------------------------
valid.alphaNumeric = function(str) {

	var regex = /^[A-Za-z0-9]+$/;

	return regex.test(str.toLowerCase());

};


// ----- alphabetic
// ---------------------------------------
valid.alpha = function(str) {

	var regex = /^[A-Za-z]+$/;

	return regex.test(str.toLowerCase());

};


// ----- email
// ---------------------------------------
valid.email = function(str) {

	var regex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

	return regex.test(str.toLowerCase());

};


// ----- negatory
// ---------------------------------------
valid.negatory = function(str) {

	var regex = /^(?:1|f(?:alse)?|n(?:o)?|off)$/;

	return regex.test(str.toLowerCase());


};


// ----- numeric
// ---------------------------------------
valid.numeric = function(str) {

	str = str.toLowerCase();

	if (str === '') {
		return false;
	}

	return !isNaN(str); // http://stackoverflow.com/a/175787

};


// ----- value
// ---------------------------------------
valid.value = function(str) {

	str = str.toLowerCase().replace(',', '');

	var numbers = ['0','1','2','3','4','5','6','7','8','9', '-'];
	
	// for $100 and #123, etc.
	if (numbers.indexOf(str[0]) === -1) {
		str = str.slice(1);
	}


	return !isNaN(parseInt(str), 10);

};


// ----- url
// ---------------------------------------
valid.url = function(str) {

	var regex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i;

	return regex.test(str.toLowerCase());

};


// ----- zip code
//		--	1. input must be a string
//		--	2. check number
//		--	3. perform regex test
// ---------------------------------------
valid.zipCode = function(str) {

	// [1] throws here if not a string
	str = str.toLowerCase();

	// [2] every zip code begins with a number, and none are < 00501
	var numeric = parseInt(str, 10);

	if (isNaN(numeric) || numeric < 501) {
		return false;
	}

	// [3]
	var regex = /^\d{5}(-\d{4})?$/;

	return regex.test(str);

};


// -------------- credit card methods --------------

// ----- credit card check constructor
// ---------------------------------------
function CreditCard(regex) {

	return function(str) {

		return regex.test(str.toLowerCase());

	};

}


// ----- specific card regexp validation
// ---------------------------------------
valid.card = {
	visa: new CreditCard(/^4[0-9]{12}(?:[0-9]{3})?$/),
	mastercard: new CreditCard(/^5[1-5][0-9]{14}$/),
	amex: new CreditCard(/^3[47][0-9]{13}$/),
	carteBlanche: new CreditCard(/^389[0-9]{11}$|^380[0-9]{11}$/),
	dinersClub: new CreditCard(/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/),
	discover: new CreditCard(/^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/),
	jcb: new CreditCard(/^(?:2131|1800|35\d{3})\d{11}$/),
	lasercard: new CreditCard(/^(6304|6706|6709|6771)[0-9]{12,15}$/),
	maestro: new CreditCard(/^(5018|5020|5038|6304|6759|6761|6763|6799)[0-9]{8,19}$/),
	solo: new CreditCard(/^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$|^(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}$/),
	unionpay: new CreditCard(/^(62[0-9]{14,17})$/)
};


// ----- generic card validation
//		--	1. input must be a string
//		--	2. input length must be valid
//		--	3. perform check based on number
// ---------------------------------------
valid.creditCard = valid.card.generic = function(str) {

	// [1] throws here if not a string
	str = str.toLowerCase();

	// [2] must be valid card length
	if (str.length < 13 || str.length > 19) {
		return false;
	}

	// [3] method of testing credit cards from 
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