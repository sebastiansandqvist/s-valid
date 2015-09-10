'use strict';

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
module.exports = {
	generic: require('./creditCard'),
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