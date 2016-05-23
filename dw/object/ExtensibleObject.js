var _super = require('../object/PersistentObject');

var ExtensibleObject = function() {};

ExtensibleObject.prototype = new _super();

ExtensibleObject.prototype.describe = function() {};

ExtensibleObject.prototype.getCustom = function() {};

ExtensibleObject.prototype.custom = null;

module.exports = ExtensibleObject;
