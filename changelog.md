# s-valid changelog
## 1.3.0
* convert to es6 (mainly just let/const)
* replace blanket with istanbul for code coverage
* replace jshint with eslint
* add jscs for code style consistency linting
* remove gulp--just npm scripts now
* fix bug where parseInt required a radix

## 1.2.0
* made all methods modular
	* eg. `var email = require('s-valid').email` to only add the email method
* methods should throw (not just return false) when passed arguments of wrong type, so now they do.
* speed improvements to `valid.creditCard` by removing unnecessary regexp tests

## 1.1.0
* distinct mastercard and visa regular expressions
	* removed `mastercardVisa`

## 1.0.0
* **no more number methods**
	* `zip` takes strings (not numbers)
	* `creditCard` and `card.{type}` take strings
	* removed `integer` method (too simple)

## 0.6.0
* breaking changes
	* renamed `valueString` to `value`
	* renamed `numberString` to `numeric`
* other changes
	* added `alpha` method

## 0.5.0
* breaking changes
	* renamed `numberStringLoose` to `valueString`
	* removed number methods `positive` and `negative`


## 0.4.0
* breaking changes. removed the following string methods:
	* empty
	* notEmpty
	* space
	* length
	* maxChars
	* minChars

## 0.3.0
* breaking changes to credit card validation
	* `valid.creditCard` is now an alias (shortcut) for `valid.card.generic`
	* all specific creditCard methods are now in the `card` object rather than `creditCard` object (eg. use `valid.card.amex(n)`)

## 0.2.0
* breaking changes to credit card validation
	* the former `valid.creditCard` method is now `valid.creditCard.generic` and allows for more card types
	* specific card regexps have been added and can be used as follows:
		* `valid.creditCard.amex(number); // returns true or false`
		* `valid.creditCard.maestro(number); // returns true or false`
		* etc. works with: visa, mastercard, amex, maestro, jcb, unionpay, discover, solo, carteBlanche, dinersClub, and lasercard
		* Note that visa and mastercard share a regexp and are each aliases of `creditCard.mastercardVisa(number);`