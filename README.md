# s-valid.js
## Simple common string and number validator
s-valid is dependency-free and has complete test coverage. Use `npm test` or `mocha` to run unit tests.

s-valid performs a type check before any other tests. String methods will only work on strings and number methods will only work on numbers.

~~The script can be used modularly. For example, `require('s-valid').email` will only import the email validator.~~
*(Modularity coming soon)*

Some of the regular expressions are brought in from is_js (https://github.com/arasatasaygin/is.js). Some differences from is.js in the regular expressions used behind-the-scenes are:
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

// ----- String methods
// ---------------------------------------
valid.alphaNumeric('Test123') // true
valid.alphaNumeric('Tést') // false
valid.alphaNumeric('Test 123') // false
valid.alphaNumeric('Test_123') // false
valid.alphaNumeric('Test-123') // false

valid.email('email@test.com'); // true
valid.email('email@test'); // false

valid.empty(''); // true
valid.empty(' '); // false
valid.empty(0); // false
valid.empty([]); // false -- Strings and Numbers only
valid.empty({}); // false

valid.length(4, 'test') // true
valid.length(8, 'test') // false

valid.maxChars(10, 'test'); // true
valid.maxChars(4, 'test'); // true
valid.maxChars(2, 'test'); // false

valid.minChars(2, 'test') // true
valid.minChars(4, 'test') // true
valid.minChars(10, 'test') //false

valid.notEmpty('test') // true
valid.notEmpty(' ') // true
valid.notEmpty('') // false
valid.notEmpty(0) // false
valid.notEmpty([]) // false

valid.numberString('123') // true
valid.numberString('-123') // true
valid.numberString('123px') // false
valid.numberString('$123000') // false

valid.numberStringLoose('123') // true
valid.numberStringLoose('-123') // true
valid.numberStringLoose('123px') // true
valid.numberStringLoose('$123,000.00') // true
valid.numberStringLoose('test') // false
valid.numberStringLoose('Infinity') // false

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


// ----- Number methods
// ---------------------------------------
valid.creditCard(4242424242424242); // true (matches Visa regexp)
valid.creditCard(1234123412341234); // false

valid.integer(1) // true
valid.integer(0) // true
valid.integer(-1) // true
valid.integer(10e+3) // true
valid.integer(10e-3) // false
valid.integer(1.5) // false

valid.positive(100); // true
valid.positive(-100); // false
valid.positive(0); // false

valid.negative(-100); // true
valid.negative(100); // false
valid.negative(0); // false

```