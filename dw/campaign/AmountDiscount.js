var _super = require('./Discount');

var AmountDiscount = function(){};

AmountDiscount.prototype = new _super();

AmountDiscount.prototype.getAmount = function(){};
AmountDiscount.prototype.amount=null;

module.exports = AmountDiscount;
