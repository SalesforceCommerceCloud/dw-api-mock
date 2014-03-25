var _super = require('../object/PersistentObject');

var ABTest = function(){};

ABTest.prototype = new _super();

ABTest.prototype.getID = function(){};
ABTest.prototype.ID=null;

module.exports = ABTest;