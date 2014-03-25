var _super = require('../object/ExtensibleObject');

var ProductOptionValue = function(){};

ProductOptionValue.prototype = new _super();

ProductOptionValue.prototype.getID = function(){};
ProductOptionValue.prototype.getDescription = function(){};
ProductOptionValue.prototype.getDisplayValue = function(){};
ProductOptionValue.prototype.getProductIDModifier = function(){};
ProductOptionValue.prototype.ID=null;
ProductOptionValue.prototype.description=null;
ProductOptionValue.prototype.displayValue=null;
ProductOptionValue.prototype.productIDModifier=null;

module.exports = ProductOptionValue;