'use strict';

// ----- zip code
//		--	1. input must be a string
//		--	2. check number
//		--	3. perform regex test
// ---------------------------------------
module.exports = function(str) {

	// [1] throws here if not a string
	str = str.toLowerCase();

	// [2] every zip code begins with a number, and none are < 00501
	const numeric = parseInt(str, 10);

	if (isNaN(numeric) || numeric < 501) {
		return false;
	}

	// [3]
	const regex = /^\d{5}(-\d{4})?$/;

	return regex.test(str);

};