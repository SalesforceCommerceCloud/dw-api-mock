var _super = require('./Discount');

var TotalFixedPriceDiscount = function(){};

TotalFixedPriceDiscount.prototype = new _super();

TotalFixedPriceDiscount.prototype.getTotalFixedPrice = function(){};
TotalFixedPriceDiscount.prototype.totalFixedPrice=null;

module.exports = TotalFixedPriceDiscount;
