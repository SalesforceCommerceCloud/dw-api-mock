var _super = require('../object/ActiveData');

var CustomerActiveData = function(){};

CustomerActiveData.prototype = new _super();

CustomerActiveData.prototype.getVisitsWeek = function(){};
CustomerActiveData.prototype.getVisitsMonth = function(){};
CustomerActiveData.prototype.getVisitsYear = function(){};
CustomerActiveData.prototype.getOrders = function(){};
CustomerActiveData.prototype.getLastOrderDate = function(){};
CustomerActiveData.prototype.getOrderValueMonth = function(){};
CustomerActiveData.prototype.getOrderValue = function(){};
CustomerActiveData.prototype.getAvgOrderValue = function(){};
CustomerActiveData.prototype.getDiscountValueWithoutCoupon = function(){};
CustomerActiveData.prototype.getDiscountValueWithCoupon = function(){};
CustomerActiveData.prototype.getSourceCodeOrders = function(){};
CustomerActiveData.prototype.getReturns = function(){};
CustomerActiveData.prototype.getReturnValue = function(){};
CustomerActiveData.prototype.getGiftOrders = function(){};
CustomerActiveData.prototype.getGiftUnits = function(){};
CustomerActiveData.prototype.getTopCategoriesOrdered = function(){};
CustomerActiveData.prototype.getProductsOrdered = function(){};
CustomerActiveData.prototype.getProductMastersOrdered = function(){};
CustomerActiveData.prototype.getProductsViewedMonth = function(){};
CustomerActiveData.prototype.getProductsAbandonedMonth = function(){};
CustomerActiveData.prototype.visitsWeek=null;
CustomerActiveData.prototype.visitsMonth=null;
CustomerActiveData.prototype.visitsYear=null;
CustomerActiveData.prototype.orders=null;
CustomerActiveData.prototype.lastOrderDate=null;
CustomerActiveData.prototype.orderValueMonth=null;
CustomerActiveData.prototype.orderValue=null;
CustomerActiveData.prototype.avgOrderValue=null;
CustomerActiveData.prototype.discountValueWithoutCoupon=null;
CustomerActiveData.prototype.discountValueWithCoupon=null;
CustomerActiveData.prototype.sourceCodeOrders=null;
CustomerActiveData.prototype.returns=null;
CustomerActiveData.prototype.returnValue=null;
CustomerActiveData.prototype.giftOrders=null;
CustomerActiveData.prototype.giftUnits=null;
CustomerActiveData.prototype.topCategoriesOrdered=null;
CustomerActiveData.prototype.productsOrdered=null;
CustomerActiveData.prototype.productMastersOrdered=null;
CustomerActiveData.prototype.productsViewedMonth=null;
CustomerActiveData.prototype.productsAbandonedMonth=null;

module.exports = CustomerActiveData;
