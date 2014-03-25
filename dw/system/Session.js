var Session = function(){};

Session.prototype.getCurrency = function(){};
Session.prototype.setCurrency = function(){};
Session.prototype.getUserName = function(){};
Session.prototype.getCustom = function(){};
Session.prototype.getCustomer = function(){};
Session.prototype.getSessionID = function(){};
Session.prototype.isCustomerAuthenticated = function(){};
Session.prototype.isUserAuthenticated = function(){};
Session.prototype.getClickStream = function(){};
Session.prototype.getPrivacy = function(){};
Session.prototype.getSourceCodeInfo = function(){};
Session.prototype.getLastReceivedSourceCodeInfo = function(){};
Session.prototype.currency=null;
Session.prototype.userName=null;
Session.prototype.custom=null;
Session.prototype.customer=null;
Session.prototype.sessionID=null;
Session.prototype.clickStream=null;
Session.prototype.privacy=null;
Session.prototype.sourceCodeInfo=null;
Session.prototype.lastReceivedSourceCodeInfo=null;

module.exports = Session;