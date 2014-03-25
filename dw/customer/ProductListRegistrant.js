var _super = require('../object/ExtensibleObject');

var ProductListRegistrant = function(){};

ProductListRegistrant.prototype = new _super();

ProductListRegistrant.prototype.getEmail = function(){};
ProductListRegistrant.prototype.getFirstName = function(){};
ProductListRegistrant.prototype.setFirstName = function(){};
ProductListRegistrant.prototype.getLastName = function(){};
ProductListRegistrant.prototype.setLastName = function(){};
ProductListRegistrant.prototype.getRole = function(){};
ProductListRegistrant.prototype.setEmail = function(){};
ProductListRegistrant.prototype.setRole = function(){};
ProductListRegistrant.prototype.email=null;
ProductListRegistrant.prototype.firstName=null;
ProductListRegistrant.prototype.lastName=null;
ProductListRegistrant.prototype.role=null;

module.exports = ProductListRegistrant;