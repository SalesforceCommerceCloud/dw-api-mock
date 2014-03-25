var FTPClient = function(){};

FTPClient.prototype.getTimeout = function(){};
FTPClient.prototype.get = function(){};
FTPClient.prototype.put = function(){};
FTPClient.prototype.list = function(){};
FTPClient.prototype.cd = function(){};
FTPClient.prototype.mkdir = function(){};
FTPClient.prototype.rename = function(){};
FTPClient.prototype.connect = function(){};
FTPClient.prototype.getReplyCode = function(){};
FTPClient.prototype.disconnect = function(){};
FTPClient.prototype.setTimeout = function(){};
FTPClient.prototype.putBinary = function(){};
FTPClient.prototype.getBinary = function(){};
FTPClient.prototype.del = function(){};
FTPClient.prototype.removeDirectory = function(){};
FTPClient.prototype.getConnected = function(){};
FTPClient.prototype.getReplyMessage = function(){};
FTPClient.prototype.timeout=null;
FTPClient.prototype.replyCode=null;
FTPClient.prototype.binary=null;
FTPClient.prototype.connected=null;
FTPClient.prototype.replyMessage=null;

module.exports = FTPClient;