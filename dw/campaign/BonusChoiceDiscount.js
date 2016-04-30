var _super = require('./Discount');

var BonusChoiceDiscount = function(){};

BonusChoiceDiscount.prototype = new _super();

BonusChoiceDiscount.prototype.getBonusProducts = function(){};
BonusChoiceDiscount.prototype.getBonusProductPrice = function(){};
BonusChoiceDiscount.prototype.getMaxBonusItems = function(){};
BonusChoiceDiscount.prototype.bonusProducts=null;
BonusChoiceDiscount.prototype.bonusProductPrice=null;
BonusChoiceDiscount.prototype.maxBonusItems=null;

module.exports = BonusChoiceDiscount;
