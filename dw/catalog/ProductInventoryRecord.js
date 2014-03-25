var _super = require('../object/ExtensibleObject');

var ProductInventoryRecord = function(){};

ProductInventoryRecord.prototype = new _super();

ProductInventoryRecord.prototype.isPerpetual = function(){};
ProductInventoryRecord.prototype.setPerpetual = function(){};
ProductInventoryRecord.prototype.getAllocation = function(){};
ProductInventoryRecord.prototype.setAllocation = function(){};
ProductInventoryRecord.prototype.getAllocationResetDate = function(){};
ProductInventoryRecord.prototype.getTurnover = function(){};
ProductInventoryRecord.prototype.getOnHand = function(){};
ProductInventoryRecord.prototype.getStockLevel = function(){};
ProductInventoryRecord.prototype.getATS = function(){};
ProductInventoryRecord.prototype.getPreorderBackorderAllocation = function(){};
ProductInventoryRecord.prototype.setPreorderBackorderAllocation = function(){};
ProductInventoryRecord.prototype.getInStockDate = function(){};
ProductInventoryRecord.prototype.setInStockDate = function(){};
ProductInventoryRecord.prototype.isPreorderable = function(){};
ProductInventoryRecord.prototype.setPreorderable = function(){};
ProductInventoryRecord.prototype.isBackorderable = function(){};
ProductInventoryRecord.prototype.setBackorderable = function(){};
ProductInventoryRecord.prototype.allocation=null;
ProductInventoryRecord.prototype.allocationResetDate=null;
ProductInventoryRecord.prototype.turnover=null;
ProductInventoryRecord.prototype.onHand=null;
ProductInventoryRecord.prototype.stockLevel=null;
ProductInventoryRecord.prototype.ATS=null;
ProductInventoryRecord.prototype.preorderBackorderAllocation=null;
ProductInventoryRecord.prototype.inStockDate=null;

module.exports = ProductInventoryRecord;