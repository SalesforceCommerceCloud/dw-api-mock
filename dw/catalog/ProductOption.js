var _super = require('../object/ExtensibleObject');

var ProductOption = function(){};

ProductOption.prototype = new _super();

ProductOption.prototype.getDefaultValue = function(){};
ProductOption.prototype.getDisplayName = function(){};
ProductOption.prototype.getID = function(){};
ProductOption.prototype.getDescription = function(){};
ProductOption.prototype.getImage = function(){};
ProductOption.prototype.getOptionValues = function(){};
ProductOption.prototype.getHtmlName = function(){};
ProductOption.prototype.defaultValue=null;
ProductOption.prototype.displayName=null;
ProductOption.prototype.ID=null;
ProductOption.prototype.description=null;
ProductOption.prototype.image=null;
ProductOption.prototype.optionValues=null;
ProductOption.prototype.htmlName=null;

module.exports = ProductOption;