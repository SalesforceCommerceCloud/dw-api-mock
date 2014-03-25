var _super = require('../object/ExtensibleObject');

var LineItem = function(){};

LineItem.prototype = new _super();

LineItem.prototype.getLineItemCtnr = function(){};
LineItem.prototype.getTaxClassID = function(){};
LineItem.prototype.getPrice = function(){};
LineItem.prototype.getBasePrice = function(){};
LineItem.prototype.setBasePrice = function(){};
LineItem.prototype.setNetPrice = function(){};
LineItem.prototype.setTax = function(){};
LineItem.prototype.setGrossPrice = function(){};
LineItem.prototype.getTaxRate = function(){};
LineItem.prototype.setTaxRate = function(){};
LineItem.prototype.getLineItemText = function(){};
LineItem.prototype.setLineItemText = function(){};
LineItem.prototype.setTaxClassID = function(){};
LineItem.prototype.updatePrice = function(){};
LineItem.prototype.updateTax = function(){};
LineItem.prototype.getTaxBasis = function(){};
LineItem.prototype.getPriceValue = function(){};
LineItem.prototype.setPriceValue = function(){};
LineItem.prototype.getNetPrice = function(){};
LineItem.prototype.getGrossPrice = function(){};
LineItem.prototype.getTax = function(){};
LineItem.prototype.lineItemCtnr=null;
LineItem.prototype.taxClassID=null;
LineItem.prototype.price=null;
LineItem.prototype.basePrice=null;
LineItem.prototype.taxRate=null;
LineItem.prototype.lineItemText=null;
LineItem.prototype.taxBasis=null;
LineItem.prototype.priceValue=null;
LineItem.prototype.netPrice=null;
LineItem.prototype.grossPrice=null;
LineItem.prototype.tax=null;

module.exports = LineItem;