var ProductSearchHit = function(){};

ProductSearchHit.prototype.getProductID = function(){};
ProductSearchHit.prototype.getProduct = function(){};
ProductSearchHit.prototype.getMinPrice = function(){};
ProductSearchHit.prototype.getMaxPrice = function(){};
ProductSearchHit.prototype.isPriceRange = function(){};
ProductSearchHit.prototype.getRepresentedProducts = function(){};
ProductSearchHit.prototype.getFirstRepresentedProduct = function(){};
ProductSearchHit.prototype.getLastRepresentedProduct = function(){};
ProductSearchHit.prototype.getRepresentedVariationValues = function(){};
ProductSearchHit.prototype.product=null;
ProductSearchHit.prototype.minPrice=null;
ProductSearchHit.prototype.maxPrice=null;
ProductSearchHit.prototype.representedProducts=null;
ProductSearchHit.prototype.firstRepresentedProduct=null;
ProductSearchHit.prototype.lastRepresentedProduct=null;
ProductSearchHit.prototype.representedVariationValues=null;

module.exports = ProductSearchHit;
