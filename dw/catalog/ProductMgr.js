var ProductMgr = function() {};

ProductMgr.getProduct = function() {
    var Product = require('./Product');
    return new Product();
};

ProductMgr.queryAllSiteProducts = function() {};

ProductMgr.queryProductsInCatalog = function() {};

ProductMgr.queryAllSiteProductsSorted = function() {};

ProductMgr.queryProductsInCatalogSorted = function() {};

ProductMgr.prototype.product = null;

module.exports = ProductMgr;
