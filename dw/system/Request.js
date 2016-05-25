var Request = function() {};

Request.prototype.addHttpCookie = function() {};

Request.prototype.getCustom = function() {};

Request.prototype.getGeolocation = function() {};

Request.prototype.getHttpCookies = function() {};

Request.prototype.getHttpHeaders = function() {};

Request.prototype.getHttpHost = function() {};

Request.prototype.getHttpLocale = function() {};

Request.prototype.getHttpParameters = function() {};

Request.prototype.getHttpPath = function() {};

Request.prototype.getHttpProtocol = function() {};

Request.prototype.getHttpQueryString = function() {};

Request.prototype.getHttpReferer = function() {};

Request.prototype.getHttpRemoteAddress = function() {};

Request.prototype.getHttpUserAgent = function() {};

Request.prototype.getLocale = function() {};

Request.prototype.getRequestID = function() {};

Request.prototype.getSession = function() {};

Request.prototype.isHttpRequest = function() {};

Request.prototype.isHttpSecure = function() {};

Request.prototype.isIncludeRequest = function() {};

Request.prototype.locale = null;
Request.prototype.custom = null;
Request.prototype.session = null;
Request.prototype.requestID = null;
Request.prototype.httpCookies = null;
Request.prototype.httpPath = null;
Request.prototype.httpProtocol = null;
Request.prototype.httpQueryString = null;
Request.prototype.httpLocale = null;
Request.prototype.httpReferer = null;
Request.prototype.httpUserAgent = null;
Request.prototype.httpRemoteAddress = null;
Request.prototype.httpHost = null;
Request.prototype.httpParameters = null;
Request.prototype.httpHeaders = null;
Request.prototype.geolocation = null;

module.exports = Request;
