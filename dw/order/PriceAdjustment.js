var _super = require('./LineItem');

var PriceAdjustment = function(){
    this.custom = {};
};

PriceAdjustment.prototype = new _super();

PriceAdjustment.prototype.getABTest = function(){};
PriceAdjustment.prototype.getPromotion = function(){};
PriceAdjustment.prototype.getQuantity = function(){};
PriceAdjustment.prototype.getCampaign = function(){};
PriceAdjustment.prototype.isBasedOnCoupon = function(){};
PriceAdjustment.prototype.getPromotionID = function(){};
PriceAdjustment.prototype.isBasedOnCampaign = function(){};
PriceAdjustment.prototype.getCouponLineItem = function(){};
PriceAdjustment.prototype.isCustom = function(){};
PriceAdjustment.prototype.isBasedOnABTest = function(){};
PriceAdjustment.prototype.getABTestID = function(){};
PriceAdjustment.prototype.getCampaignID = function(){};
PriceAdjustment.prototype.getABTestSegment = function(){};
PriceAdjustment.prototype.getABTestSegmentID = function(){};
PriceAdjustment.prototype.getProratedPrices = function(){};
PriceAdjustment.prototype.aBTest=null;
PriceAdjustment.prototype.promotion=null;
PriceAdjustment.prototype.quantity=null;
PriceAdjustment.prototype.campaign=null;
PriceAdjustment.prototype.promotionID=null;
PriceAdjustment.prototype.couponLineItem=null;
PriceAdjustment.prototype.aBTestID=null;
PriceAdjustment.prototype.campaignID=null;
PriceAdjustment.prototype.aBTestSegment=null;
PriceAdjustment.prototype.aBTestSegmentID=null;
PriceAdjustment.prototype.proratedPrices=null;

module.exports = PriceAdjustment;
