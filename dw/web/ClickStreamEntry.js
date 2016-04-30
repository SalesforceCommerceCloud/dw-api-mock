var ClickStreamEntry = function() {};

ClickStreamEntry.prototype.getLocale = function() {};
ClickStreamEntry.prototype.getTimestamp = function() {};
ClickStreamEntry.prototype.getPath = function() {};
ClickStreamEntry.prototype.getHost = function() {};
ClickStreamEntry.prototype.getUrl = function() {};
ClickStreamEntry.prototype.getQueryString = function() {};
ClickStreamEntry.prototype.getReferer = function() {};
ClickStreamEntry.prototype.getUserAgent = function() {};
ClickStreamEntry.prototype.getRemoteAddress = function() {};
ClickStreamEntry.prototype.getPipelineName = function() {
    return ClickStreamEntry.prototype.pipelineName;
};
ClickStreamEntry.prototype.getParameter = function() {};
ClickStreamEntry.prototype.locale = null;
ClickStreamEntry.prototype.timestamp = null;
ClickStreamEntry.prototype.path = null;
ClickStreamEntry.prototype.host = null;
ClickStreamEntry.prototype.url = null;
ClickStreamEntry.prototype.queryString = null;
ClickStreamEntry.prototype.referer = null;
ClickStreamEntry.prototype.userAgent = null;
ClickStreamEntry.prototype.remoteAddress = null;
ClickStreamEntry.prototype.pipelineName = '';
ClickStreamEntry.prototype.parameter = null;

module.exports = ClickStreamEntry;
