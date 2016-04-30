var _super = require('./Discount');

var PercentageDiscount = function(){};

PercentageDiscount.prototype = new _super();

PercentageDiscount.prototype.getPercentage = function(){};
PercentageDiscount.prototype.percentage=null;

module.exports = PercentageDiscount;
