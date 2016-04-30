var ReturnCaseItem = function(){};

ReturnCaseItem.prototype.getItemId = function(){};
ReturnCaseItem.prototype.getAuthorizedQuantityValue = function(){};
ReturnCaseItem.prototype.getReturnCaseNumber = function(){};
ReturnCaseItem.prototype.getReturnItems = function(){};
ReturnCaseItem.prototype.createReturnItem = function(){};
ReturnCaseItem.prototype.getReturnedOrderItemQuantity = function(){};
ReturnCaseItem.prototype.getOrderItemNotReturnedQuantity = function(){};
ReturnCaseItem.prototype.itemId=null;
ReturnCaseItem.prototype.authorizedQuantityValue=null;
ReturnCaseItem.prototype.returnCaseNumber=null;
ReturnCaseItem.prototype.returnItems=null;
ReturnCaseItem.prototype.returnedOrderItemQuantity=null;
ReturnCaseItem.prototype.orderItemNotReturnedQuantity=null;

module.exports = ReturnCaseItem;
