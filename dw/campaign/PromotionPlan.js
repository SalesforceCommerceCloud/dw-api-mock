var PromotionPlan = function(){};

PromotionPlan.prototype.getPromotions = function(){};
PromotionPlan.prototype.getOrderPromotions = function(){};
PromotionPlan.prototype.getShippingPromotions = function(){};
PromotionPlan.prototype.removePromotion = function(){};
PromotionPlan.prototype.getProductPromotionsForQualifyingProduct = function(){};
PromotionPlan.prototype.getProductPromotionsForDiscountedProduct = function(){};
PromotionPlan.prototype.getPaymentMethodPromotions = function(){};
PromotionPlan.prototype.getPaymentCardPromotions = function(){};
PromotionPlan.prototype.getProductPromotions = function(){};
PromotionPlan.prototype.promotions=null;
PromotionPlan.prototype.orderPromotions=null;
PromotionPlan.prototype.shippingPromotions=null;
PromotionPlan.prototype.productPromotionsForQualifyingProduct=null;
PromotionPlan.prototype.productPromotionsForDiscountedProduct=null;
PromotionPlan.prototype.paymentMethodPromotions=null;
PromotionPlan.prototype.paymentCardPromotions=null;
PromotionPlan.prototype.productPromotions=null;

module.exports = PromotionPlan;