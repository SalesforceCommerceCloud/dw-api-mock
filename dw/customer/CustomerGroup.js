var _super = require('../object/ExtensibleObject');

var CustomerGroup = function(){};

CustomerGroup.prototype = new _super();

CustomerGroup.prototype.getID = function(){};
CustomerGroup.prototype.getDescription = function(){};
CustomerGroup.prototype.isRuleBased = function(){};
CustomerGroup.prototype.assignCustomer = function(){};
CustomerGroup.prototype.unassignCustomer = function(){};
CustomerGroup.prototype.ID=null;
CustomerGroup.prototype.description=null;

module.exports = CustomerGroup;