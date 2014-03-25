var _super = require('../object/PersistentObject');

var Coupon = function(){};

Coupon.prototype = new _super();

Coupon.prototype.getType = function(){};
Coupon.prototype.getID = function(){};
Coupon.prototype.isEnabled = function(){};
Coupon.prototype.getPromotions = function(){};
Coupon.prototype.getCodePrefix = function(){};
Coupon.prototype.getRedemptionLimitPerCode = function(){};
Coupon.prototype.getRedemptionLimitPerCustomer = function(){};
Coupon.prototype.getRedemptionLimitPerTimeFrame = function(){};
Coupon.prototype.getRedemptionLimitTimeFrame = function(){};
Coupon.prototype.getNextCouponCode = function(){};
Coupon.prototype.type=null;
Coupon.prototype.ID=null;
Coupon.prototype.promotions=null;
Coupon.prototype.codePrefix=null;
Coupon.prototype.redemptionLimitPerCode=null;
Coupon.prototype.redemptionLimitPerCustomer=null;
Coupon.prototype.redemptionLimitPerTimeFrame=null;
Coupon.prototype.redemptionLimitTimeFrame=null;
Coupon.prototype.nextCouponCode=null;

module.exports = Coupon;