var _super = require('../object/ExtensibleObject');

var CustomObject = function() {};

CustomObject.prototype = new _super();

CustomObject.prototype.getType = function() {};

CustomObject.prototype.__id = function() {};

CustomObject.prototype.getCustom = function() {return this.custom;};

CustomObject.prototype.type = null;
CustomObject.prototype.custom = {};

module.exports = CustomObject;
