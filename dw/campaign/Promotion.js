const ExtensibleObject = require('../object/ExtensibleObject');

class Promotion extends ExtensibleObject {
    static EXCLUSIVITY_GLOBAL = "EXCLUSIVITY_GLOBAL";
    static EXCLUSIVITY_CLASS  = "EXCLUSIVITY_CLASS";
    static EXCLUSIVITY_NONE   = "EXCLUSIVITY_NONE";

    constructor() {
        super();
        var Collection = require('../util/Collection');

        this.name = undefined;
        this.ID = undefined;
        this.active = false;
        this.enabled = false;
        this.description = undefined;
        this.sourceCodeGroups = new Collection();
        this.coupons = new Collection();
        this.startDate = undefined;
        this.endDate = undefined;
        this.customerGroups = new Collection();
        this.campaign = undefined;
        this.image = undefined;
        this.calloutMsg = undefined;
        this.details = undefined;
        this.exclusivity = undefined;
        this.rank = undefined;
        this.promotionClass = undefined;
        this.qualifierMatchMode = undefined;
        this.promotionalPrice = undefined;
        this.conditionalDescription;
    }

    getName() { return this.name; };
    getID() { return this.ID; };
    getDescription() { return this.description; };
    isActive() { return this.active; };
    getSourceCodeGroups() { return this.sourceCodeGroups; };
    getCoupons() { return this.coupons; };
    getStartDate() { return this.startDate; };
    getEndDate() { return this.endDate; };
    isEnabled() { return this.enabled; };
    getCustomerGroups() { return this.customerGroups; };
    getCampaign() { return this.campaign; };
    getImage() { return this.image; };
    getCalloutMsg() { return this.calloutMsg; };
    getDetails() { return this.details; };
    isBasedOnCoupons() { return this.coupons.size() > 0; };
    isBasedOnSourceCodes() { return this.sourceCodeGroups.size() > 0; };
    isBasedOnCustomerGroups() { return this.customerGroups.size() > 0; };
    getExclusivity() { return this.exclusivity; };
    getRank() { return this.rank; };
    getPromotionClass() { return this.promotionClass; };
    getQualifierMatchMode() { return this.qualifierMatchMode; };
    getPromotionalPrice() { return this.promotionalPrice; };
    isBasedOnCoupon() { return this.coupons.size() > 0 };
    getConditionalDescription() { return this.conditionalDescription; };
}

module.exports = Promotion;
