var _super = require('../object/ExtensibleObject');

var Catalog = function(){};

Catalog.prototype = new _super();

Catalog.prototype.getDisplayName = function(){};
Catalog.prototype.getID = function(){};
Catalog.prototype.getDescription = function(){};
Catalog.prototype.getRoot = function(){};
Catalog.prototype.displayName=null;
Catalog.prototype.ID=null;
Catalog.prototype.description=null;
Catalog.prototype.root=null;

module.exports = Catalog;