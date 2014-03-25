var ProductAvailabilityLevels = function(){};

ProductAvailabilityLevels.prototype.getInStock = function(){};
ProductAvailabilityLevels.prototype.getPreorder = function(){};
ProductAvailabilityLevels.prototype.getBackorder = function(){};
ProductAvailabilityLevels.prototype.getNotAvailable = function(){};
ProductAvailabilityLevels.prototype.getCount = function(){};
ProductAvailabilityLevels.prototype.inStock=null;
ProductAvailabilityLevels.prototype.preorder=null;
ProductAvailabilityLevels.prototype.backorder=null;
ProductAvailabilityLevels.prototype.notAvailable=null;
ProductAvailabilityLevels.prototype.count=null;

module.exports = ProductAvailabilityLevels;