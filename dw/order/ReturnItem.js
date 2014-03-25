var _super = require('RecordAdapter');

var ReturnItem = function(){};

ReturnItem.prototype = new _super();

ReturnItem.prototype.getItemId = function(){};
ReturnItem.prototype.getReturnNumber = function(){};
ReturnItem.prototype.setReturnedQuantity = function(){};
ReturnItem.prototype.itemId=null;
ReturnItem.prototype.returnNumber=null;

module.exports = ReturnItem;