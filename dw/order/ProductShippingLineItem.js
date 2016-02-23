var _super = require('./LineItem');

var ProductShippingLineItem = function(){};

ProductShippingLineItem.prototype = new _super();

ProductShippingLineItem.prototype.getQuantity = function(){};
ProductShippingLineItem.prototype.setQuantity = function(){};
ProductShippingLineItem.prototype.setPriceValue = function(){};
ProductShippingLineItem.prototype.getPriceAdjustments = function(){};
ProductShippingLineItem.prototype.getShipment = function(){};
ProductShippingLineItem.prototype.getAdjustedGrossPrice = function(){};
ProductShippingLineItem.prototype.getAdjustedNetPrice = function(){};
ProductShippingLineItem.prototype.getAdjustedTax = function(){};
ProductShippingLineItem.prototype.getAdjustedPrice = function(){};
ProductShippingLineItem.prototype.isSurcharge = function(){};
ProductShippingLineItem.prototype.setSurcharge = function(){};
ProductShippingLineItem.prototype.getProductLineItem = function(){};
ProductShippingLineItem.prototype.quantity=null;
ProductShippingLineItem.prototype.priceAdjustments=null;
ProductShippingLineItem.prototype.shipment=null;
ProductShippingLineItem.prototype.adjustedGrossPrice=null;
ProductShippingLineItem.prototype.adjustedNetPrice=null;
ProductShippingLineItem.prototype.adjustedTax=null;
ProductShippingLineItem.prototype.adjustedPrice=null;
ProductShippingLineItem.prototype.productLineItem=null;

module.exports = ProductShippingLineItem;
