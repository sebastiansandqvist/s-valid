'use strict';

// ----- value
// ---------------------------------------
module.exports = function(str) {

	str = str.toLowerCase().replace(',', '');

	var numbers = ['0','1','2','3','4','5','6','7','8','9', '-'];
	
	// for $100 and #123, etc.
	if (numbers.indexOf(str[0]) === -1) {
		str = str.slice(1);
	}

	return !isNaN(parseInt(str), 10);

};