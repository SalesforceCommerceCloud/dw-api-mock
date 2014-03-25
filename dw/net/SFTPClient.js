var SFTPClient = function(){};

SFTPClient.prototype.getTimeout = function(){};
SFTPClient.prototype.get = function(){};
SFTPClient.prototype.put = function(){};
SFTPClient.prototype.list = function(){};
SFTPClient.prototype.cd = function(){};
SFTPClient.prototype.mkdir = function(){};
SFTPClient.prototype.rename = function(){};
SFTPClient.prototype.connect = function(){};
SFTPClient.prototype.disconnect = function(){};
SFTPClient.prototype.setTimeout = function(){};
SFTPClient.prototype.putBinary = function(){};
SFTPClient.prototype.getBinary = function(){};
SFTPClient.prototype.del = function(){};
SFTPClient.prototype.removeDirectory = function(){};
SFTPClient.prototype.getConnected = function(){};
SFTPClient.prototype.getFileInfo = function(){};
SFTPClient.prototype.getErrorMessage = function(){};
SFTPClient.prototype.timeout=null;
SFTPClient.prototype.binary=null;
SFTPClient.prototype.connected=null;
SFTPClient.prototype.fileInfo=null;
SFTPClient.prototype.errorMessage=null;

module.exports = SFTPClient;