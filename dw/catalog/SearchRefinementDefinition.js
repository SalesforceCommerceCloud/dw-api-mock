var _super = require('../object/ExtensibleObject');

var SearchRefinementDefinition = function(){};

SearchRefinementDefinition.prototype = new _super();

SearchRefinementDefinition.prototype.getDisplayName = function(){};
SearchRefinementDefinition.prototype.getValueTypeCode = function(){};
SearchRefinementDefinition.prototype.getAttributeID = function(){};
SearchRefinementDefinition.prototype.getCutoffThreshold = function(){};
SearchRefinementDefinition.prototype.isAttributeRefinement = function(){};
SearchRefinementDefinition.prototype.displayName=null;
SearchRefinementDefinition.prototype.valueTypeCode=null;
SearchRefinementDefinition.prototype.attributeID=null;
SearchRefinementDefinition.prototype.cutoffThreshold=null;

module.exports = SearchRefinementDefinition;