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

Money.prototype.getCurrencyCode = function() {};

Money.prototype.add = function() {};

Money.prototype.equals = function() {};

Money.prototype.toString = function() {};

Money.prototype.hashCode = function() {};

/**
 * Compares this instance against another one.
 * @param {Money} money - A money instance to compare against.
 * @returns {Number} A negative number when this instance is smaller;
 * a positive number when this instance is bigger;
 * zero when this instance equals to the parameter.
 */
Money.prototype.compareTo = function(money) {
    if (this.value < money.value) {
        return -1;
    } else if (this.value > money.value) {
        return 1;
    } else {
        return 0;
    }
};

Money.prototype.isAvailable = function() {};

Money.prototype.getValueOrNull = function() {
    this.value || null;
};

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
