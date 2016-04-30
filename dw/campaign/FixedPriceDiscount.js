var _super = require('./Discount');

var FixedPriceDiscount = function(){};

FixedPriceDiscount.prototype = new _super();

FixedPriceDiscount.prototype.getFixedPrice = function(){};
FixedPriceDiscount.prototype.fixedPrice=null;

module.exports = FixedPriceDiscount;
