# s-valid.js

[![NPM version](https://img.shields.io/npm/v/s-valid.svg)](https://www.npmjs.com/package/s-valid) ![Dependencies](https://img.shields.io/david/sebastiansandqvist/s-valid.svg) [![build status](http://img.shields.io/travis/sebastiansandqvist/s-valid.svg)](https://travis-ci.org/sebastiansandqvist/s-valid) [![NPM license](https://img.shields.io/npm/l/s-valid.svg)](https://www.npmjs.com/package/s-valid)

## Simple string and number validator
#### For common tests (credit cards, urls, email addresses, ...)
s-valid is a dependency-free string and number validator for Node & iojs with complete test coverage (`npm test`).

*s-valid performs a type check before any other validation occurs.* String methods will only work on strings and number methods will only work on numbers.

---
[is.js](https://github.com/arasatasaygin/is.js) provided some of the regular expressions used behind-the-scenes, however the following improvements have been made to them:

- URLs can include the port number and be IP addresses without failing
- Affirmative string values can include any capitalization
- "on" is also considered affirmative (useful for capturing checkbox values in POST requests)
- Negatory string values ("off", "no", "false") have been added
- More credit card types will pass validation

## Installation
```
npm install s-valid
```

## Usage
```javascript
var valid = require('s-valid');

// simple validation
if (valid.email('email@test.com')) {
	// ...
}

// primary use case: server-side form validation
if (!valid.email(req.body.email)) {
	// return error...
}
```

### All String Methods
```javascript
// ----- String methods
// ---------------------------------------
valid.alphaNumeric('Test123'); // true
valid.alphaNumeric('Tést'); // false
valid.alphaNumeric('Test 123'); // false
valid.alphaNumeric('Test_123'); // false
valid.alphaNumeric('Test-123'); // false

valid.email('email@test.com'); // true
valid.email('email@test'); // false

valid.empty(''); // true
valid.empty(' '); // false
valid.empty(0); // false
valid.empty([]); // false -- Strings and Numbers only
valid.empty({}); // false

valid.length(4, 'test'); // true
valid.length(8, 'test'); // false

valid.maxChars(10, 'test'); // true
valid.maxChars(4, 'test'); // true
valid.maxChars(2, 'test'); // false

valid.minChars(2, 'test'); // true
valid.minChars(4, 'test'); // true
valid.minChars(10, 'test'); // false

valid.notEmpty('test'); // true
valid.notEmpty(' '); // true
valid.notEmpty(''); // false
valid.notEmpty(0); // false
valid.notEmpty([]); // false

valid.numberString('123'); // true
valid.numberString('-123'); // true
valid.numberString('123px'); // false
valid.numberString('$123000'); // false

valid.numberStringLoose('123'); // true
valid.numberStringLoose('-123'); // true
valid.numberStringLoose('123px'); // true
valid.numberStringLoose('$123,000.00'); // true
valid.numberStringLoose('test'); // false
valid.numberStringLoose('Infinity'); // false

valid.space(' '); // true
valid.space('	'); // false (is a tab)
valid.space('  '); // false (is two spaces)
valid.space('spaced words'); // false 

valid.url('http://test.com'); // true
valid.url('https://test.com'); // true
valid.url('https://test.com:3000'); // true -- works with port numbers
valid.url('http://4.35.153.221'); // true -- IP addresses are valid URLs
valid.url('http://300.35.153.221'); // false -- invalid IP addresses fail
valid.url('http:/test.com'); // false
```
### All Number Methods
```javascript
// ----- Number methods
// ---------------------------------------

// Note: valid.creditCard() is just an alias for valid.card.generic()
valid.creditCard(4242424242424242); // true (matches Visa regexp)
valid.creditCard(5610591081018250); // true with no regexp match (Australian Bankcard)
valid.creditCard(1234123412341234); // false

// Specific card tests exist for:
// visa, mastercard, amex, maestro, jcb, unionpay, 
// discover, solo, carteBlanche, dinersClub, and lasercard
valid.card.amex(371449635398431);  // true
valid.card.amex(4242424242424242); // false (is Visa)

valid.integer(1); // true
valid.integer(0); // true
valid.integer(-1); // true
valid.integer(10e+3); // true
valid.integer(10e-3); // false
valid.integer(1.5); // false

valid.positive(100); // true
valid.positive(-100); // false
valid.positive(0); // false

valid.negative(-100); // true
valid.negative(100); // false
valid.negative(0); // false

```