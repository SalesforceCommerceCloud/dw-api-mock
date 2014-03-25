var _super = require('../object/ExtensibleObject');

var Campaign = function(){};

Campaign.prototype = new _super();

Campaign.prototype.getID = function(){};
Campaign.prototype.getDescription = function(){};
Campaign.prototype.isActive = function(){};
Campaign.prototype.getSourceCodeGroups = function(){};
Campaign.prototype.getCoupons = function(){};
Campaign.prototype.getStartDate = function(){};
Campaign.prototype.getEndDate = function(){};
Campaign.prototype.isEnabled = function(){};
Campaign.prototype.getPromotions = function(){};
Campaign.prototype.getCustomerGroups = function(){};
Campaign.prototype.ID=null;
Campaign.prototype.description=null;
Campaign.prototype.sourceCodeGroups=null;
Campaign.prototype.coupons=null;
Campaign.prototype.startDate=null;
Campaign.prototype.endDate=null;
Campaign.prototype.promotions=null;
Campaign.prototype.customerGroups=null;

module.exports = Campaign;