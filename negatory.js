'use strict';

// ----- negatory
// ---------------------------------------
module.exports = function(str) {

	const regex = /^(?:1|f(?:alse)?|n(?:o)?|off)$/;

	return regex.test(str.toLowerCase());

};
