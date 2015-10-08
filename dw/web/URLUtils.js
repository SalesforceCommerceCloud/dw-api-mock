var URLUtils = function(){};

URLUtils.http = function(){};
URLUtils.https = function(){};
URLUtils.abs = function(){};
URLUtils.url = function(){};
URLUtils.home = function(){};
URLUtils.webRoot = function(){};
URLUtils.absWebRoot = function(){};
URLUtils.httpWebRoot = function(){};
URLUtils.httpsWebRoot = function(){};
URLUtils.httpContinue = function(){};
URLUtils.httpsContinue = function(){};

URLUtils.staticURL = function() {
	return '/on/demandware.static/relative/url/to/resource';
};

URLUtils.imageURL = function(){};
URLUtils.absImage = function(){};

URLUtils.httpStatic = function() {
	return 'http://domain/on/demandware.static/absolute/http/url/to/resource';
};

URLUtils.httpsStatic = function() {
	return 'https://domain/on/demandware.static/absolute/https/url/to/resource';
};

URLUtils.httpsImage = function(){};
URLUtils.httpImage = function(){};

URLUtils.absStatic = function() {
	return 'http://domain/on/demandware.static/absolute/url/to/resource';
};

URLUtils.sessionRedirect = function(){};
URLUtils.sessionRedirectHttpOnly = function(){};
URLUtils.continueURL = function(){};
URLUtils.httpHome = function(){};
URLUtils.httpsHome = function(){};

module.exports = URLUtils;