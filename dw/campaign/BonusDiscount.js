var _super = require('./Discount');

var BonusDiscount = function(){};

BonusDiscount.prototype = new _super();

BonusDiscount.prototype.getBonusProducts = function(){};
BonusDiscount.prototype.bonusProducts=null;

module.exports = BonusDiscount;
