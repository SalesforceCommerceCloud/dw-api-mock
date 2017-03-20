/**
 * Money constructor.
 * @param {Number} value - Specified amount.
 * @param {String} currencyCode - Specified currency code.
 * @constructor
 */
var Money = function(value, currencyCode) {
    this.value = value;
    this.currencyCode = currencyCode;
};

/**
 * Returns the primitive value.
 * Needed for testing code that uses Money instances as parameters for Math methods.
 * @returns {Number}
 */
Money.prototype.valueOf = function() {
    return this.value;
};

/**
 * Returns the value of the money instance.
 * @returns {Number}
 */
Money.prototype.getValue = function() {
    return this.value;
};

/**
 * Multiply Money object by specified factor.
 * @param {Number} factor - Factor to multiply by.
 * @returns {Money}
 */
Money.prototype.multiply = function(factor) {
    return new Money(this.value * factor, this.currencyCode);
};

/**
 * Returns a new Money instance by substracting the specified Money object from the current object.
 * @param {Money} money - Subtraction value.
 * @returns {Money}
 */
Money.prototype.subtract = function(money) {
    return new Money(this.value - money.value, this.currencyCode);
};

/**
 * Divide Money object by specified divisor.
 * @param {Number} divisor - Value to divide by.
 * @returns {Money}
 */
Money.prototype.divide = function(divisor) {
    return new Money(this.value / divisor, this.currencyCode);
};

/**
 * Return current currency code.
 * @returns {String}
 */
Money.prototype.getCurrencyCode = function() {
    return this.currencyCode;
};

/**
 * Returns a new Money instance by adding the specified Money object from the current object.
 * @param {Money} money - Value to add.
 * @returns {Money}
 */
Money.prototype.add = function(money) {
    return new Money(this.value + money.value, this.currencyCode);
};

Money.prototype.equals = function() {};

Money.prototype.toString = function() {};

Money.prototype.hashCode = function() {};

Money.prototype.compareTo = function() {};

Money.prototype.isAvailable = function() {};

Money.prototype.getValueOrNull = function() {};

Money.prorate = function() {};

Money.prototype.isOfSameCurrency = function() {};

Money.prototype.addPercent = function() {};

Money.prototype.subtractPercent = function() {};

Money.prototype.percentOf = function() {};

Money.prototype.percentLessThan = function() {};

Money.prototype.addRate = function() {};

Money.prototype.subtractRate = function() {};

Money.prototype.toNumberString = function() {};

Money.prototype.toFormattedString = function() {};

Money.prototype.currencyCode = null;
Money.prototype.value = null;
Money.prototype.valueOrNull = null;

module.exports = Money;
