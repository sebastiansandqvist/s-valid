'use strict';

let valid = module.exports = {};

valid.affirmative = require('./affirmative.js');
valid.alpha = require('./alpha.js');
valid.alphaNumeric = require('./alphaNumeric.js');
valid.card = require('./card.js');
valid.creditCard = require('./creditCard.js');
valid.email = require('./email.js');
valid.negatory = require('./negatory.js');
valid.numeric = require('./numeric.js');
valid.url = require('./url.js');
valid.value = require('./value.js');
valid.zipCode = require('./zipCode.js');
valid.zipCodeLong = require('./zipCodeLong.js');