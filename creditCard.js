'use strict';

// ----- generic card validation
//		--	1. input must be a string
//		--	2. input length must be valid
//		--	3. perform check based on number
// ---------------------------------------
module.exports = function(str) {

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