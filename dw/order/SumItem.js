var SumItem = function(){};

SumItem.prototype.getAmount = function(){};
SumItem.prototype.getTotalTax = function(){};
SumItem.prototype.getAmountOriginal = function(){};
SumItem.prototype.getItemLevelAdjustment = function(){};
SumItem.prototype.getOrderLevelAdjustment = function(){};
SumItem.prototype.getAmountBeforeOrderLevelAdjustment = function(){};
SumItem.prototype.getAmountNet = function(){};
SumItem.prototype.getAmountGross = function(){};
SumItem.prototype.getTaxItems = function(){};
SumItem.prototype.amount=null;
SumItem.prototype.totalTax=null;
SumItem.prototype.amountOriginal=null;
SumItem.prototype.itemLevelAdjustment=null;
SumItem.prototype.orderLevelAdjustment=null;
SumItem.prototype.amountBeforeOrderLevelAdjustment=null;
SumItem.prototype.amountNet=null;
SumItem.prototype.amountGross=null;
SumItem.prototype.taxItems=null;

module.exports = SumItem;