var _super = require('../object/ExtensibleObject');

var CategoryAssignment = function(){};

CategoryAssignment.prototype = new _super();

CategoryAssignment.prototype.getName = function(){};
CategoryAssignment.prototype.getImage = function(){};
CategoryAssignment.prototype.getCalloutMsg = function(){};
CategoryAssignment.prototype.getCategory = function(){};
CategoryAssignment.prototype.getShortDescription = function(){};
CategoryAssignment.prototype.getProduct = function(){};
CategoryAssignment.prototype.getLongDescription = function(){};
CategoryAssignment.prototype.name=null;
CategoryAssignment.prototype.image=null;
CategoryAssignment.prototype.calloutMsg=null;
CategoryAssignment.prototype.category=null;
CategoryAssignment.prototype.shortDescription=null;
CategoryAssignment.prototype.product=null;
CategoryAssignment.prototype.longDescription=null;

module.exports = CategoryAssignment;