var Logger = function() {};

Logger.warn = function(){};
Logger.isInfoEnabled = function(){};
Logger.error = function(){};
Logger.debugEnabled = function(){};
Logger.isDebugEnabled = function(){};
Logger.warnEnabled = function(){};
Logger.rootLogger = function(){};
Logger.getLogger = function(){return Logger;};
Logger.debug = function(){};
Logger.info = function(){};
Logger.infoEnabled = function(){};
Logger.isErrorEnabled = function(){};
Logger.isWarnEnabled = function(){};
Logger.errorEnabled = function(){};
Logger.getRootLogger = function(){};
Logger.fatal = function(){};

module.exports = Logger;