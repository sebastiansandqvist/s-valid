'use strict';

// ----- alphanumeric
// ---------------------------------------
module.exports = function(str) {

	const regex = /^[a-z0-9]+$/i;

	return regex.test(str.toLowerCase());

};