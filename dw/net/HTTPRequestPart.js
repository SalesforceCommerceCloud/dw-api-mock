var HTTPRequestPart = function(){};

HTTPRequestPart.prototype.getContentType = function(){};
HTTPRequestPart.prototype.getName = function(){};
HTTPRequestPart.prototype.getEncoding = function(){};
HTTPRequestPart.prototype.getStringValue = function(){};
HTTPRequestPart.prototype.getFileValue = function(){};
HTTPRequestPart.prototype.contentType=null;
HTTPRequestPart.prototype.name=null;
HTTPRequestPart.prototype.encoding=null;
HTTPRequestPart.prototype.stringValue=null;
HTTPRequestPart.prototype.fileValue=null;

module.exports = HTTPRequestPart;