var Locale = function(){};

Locale.getLocale = function(){};
Locale.prototype.toString = function(){};
Locale.prototype.getLanguage = function(){};
Locale.prototype.getCountry = function(){};
Locale.prototype.getDisplayCountry = function(){};
Locale.prototype.getDisplayLanguage = function(){};
Locale.prototype.getDisplayName = function(){};
Locale.prototype.getID = function(){};
Locale.prototype.getISO3Country = function(){};
Locale.prototype.getISO3Language = function(){};
Locale.prototype.locale=null;
Locale.prototype.language=null;
Locale.prototype.country=null;
Locale.prototype.displayCountry=null;
Locale.prototype.displayLanguage=null;
Locale.prototype.displayName=null;
Locale.prototype.ID=null;
Locale.prototype.iSO3Country=null;
Locale.prototype.iSO3Language=null;

module.exports = Locale;