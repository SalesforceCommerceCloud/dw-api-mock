var _super = require('./LineItem');

var ShippingLineItem = function(){
    this.custom = {};
};

ShippingLineItem.prototype = new _super();

ShippingLineItem.prototype.getID = function(){};
ShippingLineItem.prototype.getCapturedAmount = function(){};
ShippingLineItem.prototype.getRefundedAmount = function(){};
ShippingLineItem.prototype.createShippingPriceAdjustment = function(){};
ShippingLineItem.prototype.getShippingPriceAdjustments = function(){};
ShippingLineItem.prototype.removeShippingPriceAdjustment = function(){};
ShippingLineItem.prototype.getAdjustedGrossPrice = function(){};
ShippingLineItem.prototype.getAdjustedNetPrice = function(){};
ShippingLineItem.prototype.getAdjustedTax = function(){};
ShippingLineItem.prototype.getAdjustedPrice = function(){};
ShippingLineItem.prototype.ID=null;
ShippingLineItem.prototype.capturedAmount=null;
ShippingLineItem.prototype.refundedAmount=null;
ShippingLineItem.prototype.shippingPriceAdjustments=null;
ShippingLineItem.prototype.adjustedGrossPrice=null;
ShippingLineItem.prototype.adjustedNetPrice=null;
ShippingLineItem.prototype.adjustedTax=null;
ShippingLineItem.prototype.adjustedPrice=null;

module.exports = ShippingLineItem;
