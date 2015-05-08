'use strict';

// ----- alphanumeric
// ---------------------------------------
module.exports = function(str) {

	var regex = /^[a-z0-9]+$/i;

	return regex.test(str.toLowerCase());

};