var _super = require('../object/PersistentObject');

var SortingOption = function(){};

SortingOption.prototype = new _super();

SortingOption.prototype.getDisplayName = function(){};
SortingOption.prototype.getID = function(){};
SortingOption.prototype.getDescription = function(){};
SortingOption.prototype.getSortingRule = function(){};
SortingOption.prototype.displayName=null;
SortingOption.prototype.ID=null;
SortingOption.prototype.description=null;
SortingOption.prototype.sortingRule=null;

module.exports = SortingOption;