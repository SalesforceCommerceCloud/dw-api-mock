class PromotionPlan {
    constructor(promotions) {
        var Collection = require('../util/Collection');
        this.promotions = new Collection (promotions || []);
    }

    getPromotions() { return this.promotions; }
    getOrderPromotions() { return this.promotions; }
    getShippingPromotions() { return this.promotions; }
    removePromotion() {}
    getProductPromotionsForQualifyingProduct() { return this.promotions; };
    getProductPromotionsForDiscountedProduct() { return this.promotions; };
    getPaymentMethodPromotions() { return this.promotions; };
    getPaymentCardPromotions() { return this.promotions; };
    getProductPromotions() { return this.promotions; }
}

module.exports = PromotionPlan;
