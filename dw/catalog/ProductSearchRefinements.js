var _super = require('./SearchRefinements');

var ProductSearchRefinements = function(){};

ProductSearchRefinements.prototype = new _super();

ProductSearchRefinements.prototype.getAllRefinementValues = function(){};
ProductSearchRefinements.prototype.getCategoryRefinementDefinition = function(){};
ProductSearchRefinements.prototype.getNextLevelCategoryRefinementValues = function(){};
ProductSearchRefinements.prototype.getPriceRefinementDefinition = function(){};
ProductSearchRefinements.prototype.getRefinementValue = function(){};
ProductSearchRefinements.prototype.getRefinementValues = function(){};
ProductSearchRefinements.prototype.allRefinementValues=null;
ProductSearchRefinements.prototype.categoryRefinementDefinition=null;
ProductSearchRefinements.prototype.nextLevelCategoryRefinementValues=null;
ProductSearchRefinements.prototype.priceRefinementDefinition=null;
ProductSearchRefinements.prototype.refinementValue=null;
ProductSearchRefinements.prototype.refinementValues=null;

module.exports = ProductSearchRefinements;
