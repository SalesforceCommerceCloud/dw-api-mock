var _super = require('../catalog/SearchRefinements');

var ContentSearchRefinements = function(){};

ContentSearchRefinements.prototype = new _super();

ContentSearchRefinements.prototype.getAllRefinementValues = function(){};
ContentSearchRefinements.prototype.getRefinementValue = function(){};
ContentSearchRefinements.prototype.getRefinementValues = function(){};
ContentSearchRefinements.prototype.getMatchingFolders = function(){};
ContentSearchRefinements.prototype.getFolderHits = function(){};
ContentSearchRefinements.prototype.getFolderRefinementDefinition = function(){};
ContentSearchRefinements.prototype.getNextLevelFolderRefinementValues = function(){};
ContentSearchRefinements.prototype.allRefinementValues=null;
ContentSearchRefinements.prototype.refinementValue=null;
ContentSearchRefinements.prototype.refinementValues=null;
ContentSearchRefinements.prototype.matchingFolders=null;
ContentSearchRefinements.prototype.folderHits=null;
ContentSearchRefinements.prototype.folderRefinementDefinition=null;
ContentSearchRefinements.prototype.nextLevelFolderRefinementValues=null;

module.exports = ContentSearchRefinements;
