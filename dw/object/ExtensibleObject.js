var _super = require('../object/PersistentObject');

var ExtensibleObject = function(){};

ExtensibleObject.prototype = new _super();

ExtensibleObject.prototype.describe = function(){};
ExtensibleObject.prototype.getCustom = function(){ return this.custom; };
ExtensibleObject.prototype.custom={};

module.exports = ExtensibleObject;