var _super = require('../object/ExtensibleObject');

var ActiveData = function(){};

ActiveData.prototype = new _super();

ActiveData.prototype.getCustom = function(){};
ActiveData.prototype.custom=null;

module.exports = ActiveData;