var _super = require('../object/ExtensibleObject');

var Store = function(){};

Store.prototype = new _super();

Store.prototype.getName = function(){};
Store.prototype.getID = function(){};
Store.prototype.__id = function(){};
Store.prototype.getImage = function(){};
Store.prototype.getInventoryList = function(){};
Store.prototype.getAddress1 = function(){};
Store.prototype.getAddress2 = function(){};
Store.prototype.getCity = function(){};
Store.prototype.getStateCode = function(){};
Store.prototype.getPostalCode = function(){};
Store.prototype.getCountryCode = function(){};
Store.prototype.getPhone = function(){};
Store.prototype.getEmail = function(){};
Store.prototype.getFax = function(){};
Store.prototype.getStoreHours = function(){};
Store.prototype.getStoreEvents = function(){};
Store.prototype.getLongitude = function(){};
Store.prototype.getLatitude = function(){};
Store.prototype.name=null;
Store.prototype.ID=null;
Store.prototype.image=null;
Store.prototype.inventoryList=null;
Store.prototype.address1=null;
Store.prototype.address2=null;
Store.prototype.city=null;
Store.prototype.stateCode=null;
Store.prototype.postalCode=null;
Store.prototype.countryCode=null;
Store.prototype.phone=null;
Store.prototype.email=null;
Store.prototype.fax=null;
Store.prototype.storeHours=null;
Store.prototype.storeEvents=null;
Store.prototype.longitude=null;
Store.prototype.latitude=null;

module.exports = Store;