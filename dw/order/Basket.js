var _super = require('./LineItemCtnr');

var Basket = function(){};

Basket.prototype = new _super();

Basket.prototype.getOrderBeingEdited = function(){};
Basket.prototype.getOrderNoBeingEdited = function(){};
Basket.prototype.orderBeingEdited=null;
Basket.prototype.orderNoBeingEdited=null;

module.exports = Basket;
