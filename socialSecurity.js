'use strict';

// ----- social security numbers
// ---------------------------------------
module.exports = function(str) {

	var regex = /^(?!(000|666|9))\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;

	return regex.test(str.toLowerCase());

};