var DeliveryOrder = function(){};

DeliveryOrder.prototype.getCurrencyCode = function(){};
DeliveryOrder.prototype.getStatus = function(){};
DeliveryOrder.prototype.getDeliveryOrderNumber = function(){};
DeliveryOrder.prototype.getFeedId = function(){};
DeliveryOrder.prototype.getProductSubTotal = function(){};
DeliveryOrder.getAPISumItem = function(){};
DeliveryOrder.prototype.getServiceSubtotal = function(){};
DeliveryOrder.prototype.getGrandTotal = function(){};
DeliveryOrder.prototype.asJson = function(){};
DeliveryOrder.prototype.currencyCode=null;
DeliveryOrder.prototype.status=null;
DeliveryOrder.prototype.deliveryOrderNumber=null;
DeliveryOrder.prototype.feedId=null;
DeliveryOrder.prototype.productSubTotal=null;
DeliveryOrder.prototype.aPISumItem=null;
DeliveryOrder.prototype.serviceSubtotal=null;
DeliveryOrder.prototype.grandTotal=null;

module.exports = DeliveryOrder;
