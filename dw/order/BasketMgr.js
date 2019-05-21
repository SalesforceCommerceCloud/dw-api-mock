var BasketMgr = function(){};

<<<<<<< HEAD
BasketMgr.prototype.createAgentBasket = function(){};
BasketMgr.prototype.createBasketFromOrder = function(){};
BasketMgr.prototype.deleteBasket = function(){};
BasketMgr.prototype.getBasket = function(){};
BasketMgr.prototype.getBaskets = function(){};
BasketMgr.prototype.getCurrentBasket = function(){};
BasketMgr.prototype.getCurrentOrNewBasket = function(){};
BasketMgr.prototype.getStoredBasket = function(){};

module.exports = new BasketMgr();
=======
BasketMgr.prototype.currentBasket = null;
BasketMgr.prototype.currentOrNewBasket = null;
BasketMgr.prototype.storedBasket = null;

BasketMgr.createBasketFromOrder = function(){};
BasketMgr.getBasket = function(){};
BasketMgr.getCurrentBasket = function(){};
BasketMgr.getCurrentOrNewBasket = function(){};
BasketMgr.getStoredBasket = function(){};


module.exports = BasketMgr;
>>>>>>> loreal/master
