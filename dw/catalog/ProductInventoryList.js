var _super = require('../object/ExtensibleObject');

var ProductInventoryList = function(){};

ProductInventoryList.prototype = new _super();

ProductInventoryList.prototype.getID = function(){};
ProductInventoryList.prototype.getDescription = function(){};
ProductInventoryList.prototype.getDefaultInStockFlag = function(){};
ProductInventoryList.prototype.getRecord = function(){};
ProductInventoryList.prototype.ID=null;
ProductInventoryList.prototype.description=null;
ProductInventoryList.prototype.defaultInStockFlag=null;
ProductInventoryList.prototype.record=null;

module.exports = ProductInventoryList;