var File = function(){};

File.prototype.remove = function(){};
File.prototype.getName = function(){};
File.prototype.length = function(){};
File.prototype.zip = function(){};
File.prototype.list = function(){};

File.prototype.exists = function() {
	return false;
};

File.prototype.getPath = function(){};
File.prototype.createNewFile = function(){};
File.prototype.isDirectory = function(){};
File.prototype.isFile = function(){};
File.prototype.lastModified = function(){};
File.prototype.listFiles = function(){};
File.prototype.mkdir = function(){};
File.prototype.mkdirs = function(){};
File.prototype.renameTo = function(){};
File.getRootDirectory = function(){};
File.prototype.getRootDirectoryType = function(){};
File.prototype.getFullPath = function(){};
File.prototype.unzip = function(){};
File.prototype.gzip = function(){};
File.prototype.gunzip = function(){};
File.prototype.name=null;
File.prototype.path=null;
File.prototype.rootDirectory=null;
File.prototype.rootDirectoryType=null;
File.prototype.fullPath=null;

File.CATALOG = '/CATALOGS/catalog';
File.SEPARATOR = '/';

module.exports = File;