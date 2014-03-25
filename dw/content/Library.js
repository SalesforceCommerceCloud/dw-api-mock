var _super = require('../object/ExtensibleObject');

var Library = function(){};

Library.prototype = new _super();

Library.prototype.getDisplayName = function(){};
Library.prototype.getID = function(){};
Library.prototype.getRoot = function(){};
Library.prototype.displayName=null;
Library.prototype.ID=null;
Library.prototype.root=null;

module.exports = Library;