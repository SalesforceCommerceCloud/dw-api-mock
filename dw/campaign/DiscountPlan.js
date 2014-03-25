var DiscountPlan = function(){};

DiscountPlan.prototype.getProductShippingDiscounts = function(){};
DiscountPlan.prototype.getShippingDiscounts = function(){};
DiscountPlan.prototype.getApproachingShippingDiscounts = function(){};
DiscountPlan.prototype.getLineItemCtnr = function(){};
DiscountPlan.prototype.getProductDiscounts = function(){};
DiscountPlan.prototype.getBonusDiscounts = function(){};
DiscountPlan.prototype.getOrderDiscounts = function(){};
DiscountPlan.prototype.getApproachingOrderDiscounts = function(){};
DiscountPlan.prototype.removeDiscount = function(){};
DiscountPlan.prototype.productShippingDiscounts=null;
DiscountPlan.prototype.shippingDiscounts=null;
DiscountPlan.prototype.approachingShippingDiscounts=null;
DiscountPlan.prototype.lineItemCtnr=null;
DiscountPlan.prototype.productDiscounts=null;
DiscountPlan.prototype.bonusDiscounts=null;
DiscountPlan.prototype.orderDiscounts=null;
DiscountPlan.prototype.approachingOrderDiscounts=null;

module.exports = DiscountPlan;