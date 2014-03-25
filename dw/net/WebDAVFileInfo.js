var WebDAVFileInfo = function(){};

WebDAVFileInfo.prototype.getContentType = function(){};
WebDAVFileInfo.prototype.getName = function(){};
WebDAVFileInfo.prototype.getSize = function(){};
WebDAVFileInfo.prototype.getPath = function(){};
WebDAVFileInfo.prototype.isDirectory = function(){};
WebDAVFileInfo.prototype.lastModified = function(){};
WebDAVFileInfo.prototype.getCreationDate = function(){};
WebDAVFileInfo.prototype.contentType=null;
WebDAVFileInfo.prototype.name=null;
WebDAVFileInfo.prototype.size=null;
WebDAVFileInfo.prototype.path=null;
WebDAVFileInfo.prototype.creationDate=null;

module.exports = WebDAVFileInfo;