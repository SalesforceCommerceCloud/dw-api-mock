var _super = require('./SearchRefinementDefinition');

var ProductSearchRefinementDefinition = function(){};

ProductSearchRefinementDefinition.prototype = new _super();

ProductSearchRefinementDefinition.prototype.isCategoryRefinement = function(){};
ProductSearchRefinementDefinition.prototype.isPriceRefinement = function(){};

module.exports = ProductSearchRefinementDefinition;
