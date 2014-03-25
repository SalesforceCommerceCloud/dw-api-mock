var _super = require('../object/ExtensibleObject');

var CouponLineItem = function(){};

CouponLineItem.prototype = new _super();

CouponLineItem.prototype.isValid = function(){};
CouponLineItem.prototype.getPromotion = function(){};
CouponLineItem.prototype.getPromotionID = function(){};
CouponLineItem.prototype.getStatusCode = function(){};
CouponLineItem.prototype.getCouponCode = function(){};
CouponLineItem.prototype.isApplied = function(){};
CouponLineItem.prototype.isBasedOnCampaign = function(){};
CouponLineItem.prototype.associatePriceAdjustment = function(){};
CouponLineItem.prototype.getPriceAdjustments = function(){};
CouponLineItem.prototype.promotion=null;
CouponLineItem.prototype.promotionID=null;
CouponLineItem.prototype.statusCode=null;
CouponLineItem.prototype.couponCode=null;
CouponLineItem.prototype.priceAdjustments=null;

module.exports = CouponLineItem;