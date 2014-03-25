var _super = require('../object/ExtensibleObject');

var ProductListItem = function(){};

ProductListItem.prototype = new _super();

ProductListItem.prototype.setPriority = function(){};
ProductListItem.prototype.getPriority = function(){};
ProductListItem.prototype.getType = function(){};
ProductListItem.prototype.isPublic = function(){};
ProductListItem.prototype.getID = function(){};
ProductListItem.prototype.getQuantity = function(){};
ProductListItem.prototype.getProduct = function(){};
ProductListItem.prototype.setProduct = function(){};
ProductListItem.prototype.getProductID = function(){};
ProductListItem.prototype.setPublic = function(){};
ProductListItem.prototype.getPurchases = function(){};
ProductListItem.prototype.setQuantity = function(){};
ProductListItem.prototype.setQuantityValue = function(){};
ProductListItem.prototype.getQuantityValue = function(){};
ProductListItem.prototype.getList = function(){};
ProductListItem.prototype.createPurchase = function(){};
ProductListItem.prototype.getPurchasedQuantity = function(){};
ProductListItem.prototype.getPurchasedQuantityValue = function(){};
ProductListItem.prototype.getProductOptionModel = function(){};
ProductListItem.prototype.setProductOptionModel = function(){};
ProductListItem.prototype.priority=null;
ProductListItem.prototype.type=null;
ProductListItem.prototype.ID=null;
ProductListItem.prototype.quantity=null;
ProductListItem.prototype.product=null;
ProductListItem.prototype.productID=null;
ProductListItem.prototype.purchases=null;
ProductListItem.prototype.quantityValue=null;
ProductListItem.prototype.list=null;
ProductListItem.prototype.purchasedQuantity=null;
ProductListItem.prototype.purchasedQuantityValue=null;
ProductListItem.prototype.productOptionModel=null;

module.exports = ProductListItem;