var CampaignMgr = function(){};

CampaignMgr.getPromotion = function(){};
CampaignMgr.getPromotions = function(){};
CampaignMgr.getCampaignByID = function(){};
CampaignMgr.getPromotionByID = function(){};
CampaignMgr.getPromotionByCouponCode = function(){};
CampaignMgr.getApplicablePromotions = function(){};
CampaignMgr.getConditionalPromotions = function(){};
CampaignMgr.getApplicableConditionalPromotions = function(){};
CampaignMgr.applyProductPromotions = function(){};
CampaignMgr.applyOrderPromotions = function(){};
CampaignMgr.applyShippingPromotions = function(){};
CampaignMgr.applyBonusPromotions = function(){};
CampaignMgr.prototype.promotion=null;
CampaignMgr.prototype.promotions=null;
CampaignMgr.prototype.campaignByID=null;
CampaignMgr.prototype.promotionByID=null;
CampaignMgr.prototype.promotionByCouponCode=null;
CampaignMgr.prototype.applicablePromotions=null;
CampaignMgr.prototype.conditionalPromotions=null;
CampaignMgr.prototype.applicableConditionalPromotions=null;

module.exports = CampaignMgr;