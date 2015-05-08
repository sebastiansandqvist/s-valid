'use strict';

// ----- numeric
// ---------------------------------------
module.exports = function(str) {

	str = str.toLowerCase();

	if (str === '') {
		return false;
	}

	return !isNaN(str); // http://stackoverflow.com/a/175787

};