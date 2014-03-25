var _super = require('../object/PersistentObject');

var ABTestSegment = function(){};

ABTestSegment.prototype = new _super();

ABTestSegment.prototype.getID = function(){};
ABTestSegment.prototype.getABTest = function(){};
ABTestSegment.prototype.isControlSegment = function(){};
ABTestSegment.prototype.ID=null;
ABTestSegment.prototype.aBTest=null;

module.exports = ABTestSegment;