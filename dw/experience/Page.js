var Page = function(){};

Page.prototype.getDescription = function(){return null;};
Page.prototype.getID = function(){return null;};
Page.prototype.getName = function(){return null;};
Page.prototype.getPageDescription = function(){return null;};
Page.prototype.getPageKeywords = function(){return null;};
Page.prototype.getPageTitle = function(){return null;};
Page.prototype.getRegion = function(){return null;};
Page.prototype.getTypeID = function(){return null;};
Page.prototype.hasVisibilityRules = function(){return false;};
Page.prototype.isVisible = function(){return true;};
Page.prototype.description = null;
Page.prototype.ID = null;
Page.prototype.name = null;
Page.prototype.pageDescription = null;
Page.prototype.pageKeywords = null;
Page.prototype.title = null;
Page.prototype.region = null;
Page.prototype.typeID = null;
Page.prototype.visibilityRules = false;
Page.prototype.visible = true;

module.exports = Page;