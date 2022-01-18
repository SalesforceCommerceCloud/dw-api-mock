const PersistentObject = require('../object/PersistentObject');

class Coupon extends PersistentObject {
    constructor() {
        super();
        var Collection = require('../util/Collection');

        this.type = null;
        this.ID = null;
        this.enabled = false;
        this.promotions = new Collection();
        this.codePrefix = null;
        this.redemptionLimitPerCode = null;
        this.redemptionLimitPerCustomer = null;
        this.redemptionLimitPerTimeFrame = null;
        this.redemptionLimitTimeFrame = null;
        this.nextCouponCode = null;
    }

    getType() { return this.type; };
    getID() { return this.ID; };
    isEnabled(){ return this.enabled; };
    getPromotions() { return this.promotions; };
    getCodePrefix() { return this.codePrefix; };
    getRedemptionLimitPerCode() { return this.redemptionLimitPerCode; };
    getRedemptionLimitPerCustomer() { return this.redemptionLimitPerCustomer; };
    getRedemptionLimitPerTimeFrame() { return this.redemptionLimitPerTimeFrame; };
    getRedemptionLimitTimeFrame() { return this.redemptionLimitTimeFrame; };
    getNextCouponCode() { return this.nextCouponCode; };
}

module.exports = Coupon;