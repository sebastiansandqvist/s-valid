'use strict';

// ----- alphabetic
// ---------------------------------------
module.exports = function(str) {

	var regex = /^[a-z]+$/i;

	return regex.test(str.toLowerCase());

};