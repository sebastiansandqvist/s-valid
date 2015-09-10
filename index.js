'use strict';

let valid = module.exports = {};

valid.affirmative = require('./affirmative');
valid.alpha = require('./alpha');
valid.alphaNumeric = require('./alphaNumeric');
valid.card = require('./card');
valid.creditCard = require('./creditCard');
valid.email = require('./email');
valid.negatory = require('./negatory');
valid.numeric = require('./numeric');
valid.socialSecurity = require('./socialSecurity');
valid.url = require('./url');
valid.value = require('./value');
valid.zipCode = require('./zipCode');
valid.zipCodeLong = require('./zipCodeLong');