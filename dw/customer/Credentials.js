var Credentials = function(){};

Credentials.prototype.isLocked = function(){};
Credentials.prototype.isEnabled = function(){};
Credentials.prototype.getLogin = function(){};
Credentials.prototype.setLogin = function(){};
Credentials.prototype.getPasswordQuestion = function(){};
Credentials.prototype.getPasswordAnswer = function(){};
Credentials.prototype.setPasswordQuestion = function(){};
Credentials.prototype.setPasswordAnswer = function(){};
Credentials.prototype.getRemainingLoginAttempts = function(){};
Credentials.prototype.getEnabledFlag = function(){};
Credentials.prototype.setEnabledFlag = function(){};
Credentials.prototype.setAuthenticationProviderID = function(){};
Credentials.prototype.getAuthenticationProviderID = function(){};
Credentials.prototype.setExternalID = function(){};
Credentials.prototype.getExternalID = function(){};
Credentials.prototype.login=null;
Credentials.prototype.passwordQuestion=null;
Credentials.prototype.passwordAnswer=null;
Credentials.prototype.remainingLoginAttempts=null;
Credentials.prototype.enabledFlag=null;
Credentials.prototype.authenticationProviderID=null;
Credentials.prototype.externalID=null;

module.exports = Credentials;