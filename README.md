# s-valid.js

[![NPM version](https://img.shields.io/npm/v/s-valid.svg)](https://www.npmjs.com/package/s-valid) ![Dependencies](https://img.shields.io/david/sebastiansandqvist/s-valid.svg) [![build status](http://img.shields.io/travis/sebastiansandqvist/s-valid.svg)](https://travis-ci.org/sebastiansandqvist/s-valid) [![NPM license](https://img.shields.io/npm/l/s-valid.svg)](https://www.npmjs.com/package/s-valid) ![Stability](https://img.shields.io/badge/stability-stable-green.svg) [![Test Coverage](https://codeclimate.com/github/sebastiansandqvist/s-valid/badges/coverage.svg)](https://codeclimate.com/github/sebastiansandqvist/s-valid)

## Simple modular string validator
#### For common tests (credit cards, urls, email addresses, ...)
* **Dependency-free**
* **Tested on node & iojs**

*s-valid performs a type check before any other validation occurs. Strings only!*

This module simplifies validation that requires regular expressions or multiple steps. It will not include anything that is already simple to calculate and reason about, such as string length.

## Installation
```bash
npm install --save s-valid
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
**Use it modularly if you prefer**
```javascript
var email = require('s-valid').email; // only require the method you need

if (email('email@test.com')) {
	// ...
}
```

## All Methods

##### Affirmative / Negatory
```javascript
valid.affirmative('yes'); // true
valid.affirmative('y'); // true
valid.affirmative('on'); // true
valid.affirmative('true'); // true

valid.negatory('no'); // true
valid.negatory('n'); // true
valid.negatory('off'); // true
valid.negatory('false'); // true
```

##### Alpha (alphabetic) / Numeric / AlphaNumeric
```javascript
valid.alpha('Foo'); // true
valid.alpha('Foo bar'); // false
valid.alpha('Test123'); // false

valid.numeric('123'); // true
valid.numeric('-123'); // true
valid.numeric('123px'); // false
valid.numeric('$123000'); // false

valid.alphaNumeric('Test123'); // true
valid.alphaNumeric('Tést'); // false
valid.alphaNumeric('Test 123'); // false
valid.alphaNumeric('Test_123'); // false
valid.alphaNumeric('Test-123'); // false
```

##### CreditCard
*Note: `valid.creditCard()` is an alias for `valid.card.generic()`*
```javascript
valid.creditCard('4242424242424242'); // true (matches Visa regexp)
valid.creditCard('5610591081018250'); // true with no regexp match (Australian Bankcard)
valid.creditCard('1234123412341234'); // false
```

##### Card.{type}
* Amex (`amex`)
* Carte Blanche (`carteBlanche`)
* Diners Club (`dinersClub`)
* Discover (`discover`)
* JCB (`jcb`)
* Lasercard (`lasercard`)
* Maestro (`maestro`)
* Mastercard (`mastercard`)
* Solo & Switch (`solo`)
* Unionpay (`unionpay`)
* Visa (`visa`)

```javascript
valid.card.amex('371449635398431'); // true
valid.card.amex('4242424242424242'); // false (is Visa)
```

##### Email
```javascript
valid.email('email@test.com'); // true
valid.email('email@test'); // false
```

##### Value string
*Similar to `numeric`, but less restrictive. Passes for $ (or any non-number first character), commas, and units (such as 12px or 38BTC)*
```javascript
valid.value('123'); // true
valid.value('-123'); // true
valid.value('#000000'); // true
valid.value('123px'); // true
valid.value('$123,000.00'); // true
valid.value('test'); // false
valid.value('Infinity'); // false
```

##### URL
```javascript
valid.url('http://test.com'); // true
valid.url('https://test.com'); // true
valid.url('https://test.com:3000'); // true -- works with port numbers
valid.url('http://4.35.153.221'); // true -- IP addresses are valid URLs
valid.url('http://300.35.153.221'); // false -- invalid IP addresses fail
valid.url('http:/test.com'); // false
```

##### Zip code
```javascript
valid.zipCode('89052'); // true
valid.zipCode('89052-6589'); // true
valid.zipCode('890526589'); // false
```

## Additional notes
[is.js](https://github.com/arasatasaygin/is.js) provided some of the regular expressions used behind-the-scenes, however the following improvements have been made to them:

- URLs can include the port number and be IP addresses without failing
- Affirmative string values can include any capitalization
- "on" is also considered affirmative (useful for capturing checkbox values in POST requests)
- Negatory string values ("off", "no", "false") have been added
- More credit card types will pass validation