var ProductAvailabilityModel = function(){};

ProductAvailabilityModel.prototype.isOrderable = function(){};
ProductAvailabilityModel.prototype.getInventoryRecord = function(){};
ProductAvailabilityModel.prototype.updateStockLevel = function(){};
ProductAvailabilityModel.prototype.getAvailabilityLevels = function(){};
ProductAvailabilityModel.prototype.getAvailabilityStatus = function(){};
ProductAvailabilityModel.prototype.getTimeToOutOfStock = function(){};
ProductAvailabilityModel.prototype.getAvailability = function(){};
ProductAvailabilityModel.prototype.getSKUCoverage = function(){};
ProductAvailabilityModel.prototype.isInStock = function(){};
ProductAvailabilityModel.prototype.inventoryRecord=null;
ProductAvailabilityModel.prototype.availabilityLevels=null;
ProductAvailabilityModel.prototype.availabilityStatus=null;
ProductAvailabilityModel.prototype.timeToOutOfStock=null;
ProductAvailabilityModel.prototype.availability=null;
ProductAvailabilityModel.prototype.sKUCoverage=null;

module.exports = ProductAvailabilityModel;