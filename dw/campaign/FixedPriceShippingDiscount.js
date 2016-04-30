var _super = require('./Discount');

var FixedPriceShippingDiscount = function(){};

FixedPriceShippingDiscount.prototype = new _super();

FixedPriceShippingDiscount.prototype.getFixedPrice = function(){};
FixedPriceShippingDiscount.prototype.fixedPrice=null;

module.exports = FixedPriceShippingDiscount;
