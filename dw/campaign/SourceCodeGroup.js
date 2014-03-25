var _super = require('../object/ExtensibleObject');

var SourceCodeGroup = function(){};

SourceCodeGroup.prototype = new _super();

SourceCodeGroup.prototype.getID = function(){};
SourceCodeGroup.prototype.getPriceBooks = function(){};
SourceCodeGroup.prototype.ID=null;
SourceCodeGroup.prototype.priceBooks=null;

module.exports = SourceCodeGroup;