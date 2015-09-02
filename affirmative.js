'use strict';

// ----- affirmative
// ---------------------------------------
module.exports = function(str) {

	const regex = /^(?:1|t(?:rue)?|y(?:es)?|on|ok(?:ay)?)$/;

	return regex.test(str.toLowerCase());

};