var System = function(){};

System.getPreferences = function(){};

System.getInstanceType = function() {
	return System.DEVELOPMENT_SYSTEM;
};

System.getInstanceTimeZone = function(){};
System.getInstanceHostname = function(){};
System.getCalendar = function(){};
System.prototype.preferences=null;
System.prototype.instanceType=null;
System.prototype.instanceTimeZone=null;
System.prototype.instanceHostname=null;
System.prototype.calendar=null;

System.PRODUCTION_SYSTEM = 0;
System.DEVELOPMENT_SYSTEM = 1;
module.exports = System;