'use strict';

// ----- alphabetic
// ---------------------------------------
module.exports = function(str) {

	const regex = /^[a-z]+$/i;

	return regex.test(str.toLowerCase());

};