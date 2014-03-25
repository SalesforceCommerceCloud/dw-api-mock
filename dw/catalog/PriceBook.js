var _super = require('../object/ExtensibleObject');

var PriceBook = function(){};

PriceBook.prototype = new _super();

PriceBook.prototype.getCurrencyCode = function(){};
PriceBook.prototype.getDisplayName = function(){};
PriceBook.prototype.getID = function(){};
PriceBook.prototype.getDescription = function(){};
PriceBook.prototype.isOnline = function(){};
PriceBook.prototype.getOnlineFlag = function(){};
PriceBook.prototype.getOnlineFrom = function(){};
PriceBook.prototype.getOnlineTo = function(){};
PriceBook.prototype.getParentPriceBook = function(){};
PriceBook.prototype.currencyCode=null;
PriceBook.prototype.displayName=null;
PriceBook.prototype.ID=null;
PriceBook.prototype.description=null;
PriceBook.prototype.onlineFlag=null;
PriceBook.prototype.onlineFrom=null;
PriceBook.prototype.onlineTo=null;
PriceBook.prototype.parentPriceBook=null;

module.exports = PriceBook;