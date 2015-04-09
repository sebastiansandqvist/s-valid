# s-valid changelog
## 0.2.0
* breaking changes to credit card validation
	* the former `valid.creditCard` method is now `valid.creditCard.generic` and allows for more card types
	* specific card regexps have been added and can be used as follows:
		* `valid.creditCard.amex(number); // returns true or false`
		* `valid.creditCard.maestro(number); // returns true or false`
		* etc. works with: visa, mastercard, amex, maestro, jcb, unionpay, discover, solo, carteBlanche, dinersClub, and lasercard
		* Note that visa and mastercard share a regexp and are each aliases of `creditCard.mastercardVisa(number);`