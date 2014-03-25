var _super = require('../object/ExtensibleObject');

var Folder = function(){};

Folder.prototype = new _super();

Folder.prototype.getParent = function(){};
Folder.prototype.getContent = function(){};
Folder.prototype.getDisplayName = function(){};
Folder.prototype.getID = function(){};
Folder.prototype.getDescription = function(){};
Folder.prototype.isOnline = function(){};
Folder.prototype.isRoot = function(){};
Folder.prototype.getPageTitle = function(){};
Folder.prototype.getPageDescription = function(){};
Folder.prototype.getPageKeywords = function(){};
Folder.prototype.getPageURL = function(){};
Folder.prototype.getTemplate = function(){};
Folder.prototype.getSubFolders = function(){};
Folder.prototype.getOnlineSubFolders = function(){};
Folder.prototype.getOnlineContent = function(){};
Folder.prototype.parent=null;
Folder.prototype.content=null;
Folder.prototype.displayName=null;
Folder.prototype.ID=null;
Folder.prototype.description=null;
Folder.prototype.pageTitle=null;
Folder.prototype.pageDescription=null;
Folder.prototype.pageKeywords=null;
Folder.prototype.pageURL=null;
Folder.prototype.template=null;
Folder.prototype.subFolders=null;
Folder.prototype.onlineSubFolders=null;
Folder.prototype.onlineContent=null;

module.exports = Folder;