var _super = require('../catalog/SearchModel');

var ContentSearchModel = function(){};

ContentSearchModel.prototype = new _super();

ContentSearchModel.prototype.search = function(){};
ContentSearchModel.prototype.getContent = function(){};
ContentSearchModel.urlForRefine = function(){};
ContentSearchModel.prototype.getRefinements = function(){};
ContentSearchModel.urlForContent = function(){};
ContentSearchModel.urlForFolder = function(){};
ContentSearchModel.prototype.setRecursiveFolderSearch = function(){};
ContentSearchModel.prototype.getContentID = function(){};
ContentSearchModel.prototype.getFolderID = function(){};
ContentSearchModel.prototype.getDeepestCommonFolder = function(){};
ContentSearchModel.prototype.isFolderSearch = function(){};
ContentSearchModel.prototype.isRefinedByFolder = function(){};
ContentSearchModel.prototype.isRefinedFolderSearch = function(){};
ContentSearchModel.prototype.isRecursiveFolderSearch = function(){};
ContentSearchModel.prototype.setContentID = function(){};
ContentSearchModel.prototype.setFolderID = function(){};
ContentSearchModel.prototype.urlRefineFolder = function(){};
ContentSearchModel.prototype.urlRelaxFolder = function(){};
ContentSearchModel.prototype.getFolder = function(){};
ContentSearchModel.prototype.content=null;
ContentSearchModel.prototype.refinements=null;
ContentSearchModel.prototype.contentID=null;
ContentSearchModel.prototype.folderID=null;
ContentSearchModel.prototype.deepestCommonFolder=null;
ContentSearchModel.prototype.folder=null;

module.exports = ContentSearchModel;