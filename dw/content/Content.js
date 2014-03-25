var _super = require('../object/ExtensibleObject');

var Content = function(){};

Content.prototype = new _super();

Content.prototype.getName = function(){};
Content.prototype.getID = function(){};
Content.prototype.getDescription = function(){};
Content.prototype.isOnline = function(){};
Content.prototype.getOnlineFlag = function(){};
Content.prototype.getSiteMapChangeFrequency = function(){};
Content.prototype.getSiteMapPriority = function(){};
Content.prototype.getPageTitle = function(){};
Content.prototype.getPageDescription = function(){};
Content.prototype.getPageKeywords = function(){};
Content.prototype.getPageURL = function(){};
Content.prototype.getTemplate = function(){};
Content.prototype.isSearchable = function(){};
Content.prototype.getSearchableFlag = function(){};
Content.prototype.getFolders = function(){};
Content.prototype.getClassificationFolder = function(){};
Content.prototype.name=null;
Content.prototype.ID=null;
Content.prototype.description=null;
Content.prototype.onlineFlag=null;
Content.prototype.siteMapChangeFrequency=null;
Content.prototype.siteMapPriority=null;
Content.prototype.pageTitle=null;
Content.prototype.pageDescription=null;
Content.prototype.pageKeywords=null;
Content.prototype.pageURL=null;
Content.prototype.template=null;
Content.prototype.searchableFlag=null;
Content.prototype.folders=null;
Content.prototype.classificationFolder=null;

module.exports = Content;