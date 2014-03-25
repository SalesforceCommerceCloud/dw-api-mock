var _super = require('../object/ExtensibleObject');

var BonusDiscountLineItem = function(){};

BonusDiscountLineItem.prototype = new _super();

BonusDiscountLineItem.prototype.getPromotion = function(){};
BonusDiscountLineItem.prototype.getBonusProducts = function(){};
BonusDiscountLineItem.prototype.getBonusProductPrice = function(){};
BonusDiscountLineItem.prototype.getMaxBonusItems = function(){};
BonusDiscountLineItem.prototype.getPromotionID = function(){};
BonusDiscountLineItem.prototype.getBonusProductLineItems = function(){};
BonusDiscountLineItem.prototype.promotion=null;
BonusDiscountLineItem.prototype.bonusProducts=null;
BonusDiscountLineItem.prototype.bonusProductPrice=null;
BonusDiscountLineItem.prototype.maxBonusItems=null;
BonusDiscountLineItem.prototype.promotionID=null;
BonusDiscountLineItem.prototype.bonusProductLineItems=null;

module.exports = BonusDiscountLineItem;