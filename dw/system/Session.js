var Session = function() {};

Session.prototype.getCurrency = function() {};
Session.prototype.setCurrency = function() {};
Session.prototype.getUserName = function() {};
Session.prototype.getCustom = function() {
    return Session.prototype.custom;
};
Session.prototype.getForms = function() {
    return Session.prototype.forms;
};
Session.prototype.getCustomer = function() {};
Session.prototype.getSessionID = function() {};
Session.prototype.isCustomerAuthenticated = function() {};
Session.prototype.isUserAuthenticated = function() {};
Session.prototype.getClickStream = function() {
    return Session.prototype.clickStream;
};
Session.prototype.getPrivacy = function() {};
Session.prototype.getSourceCodeInfo = function() {};
Session.prototype.getLastReceivedSourceCodeInfo = function() {};
Session.prototype.currency = null;
Session.prototype.userName = null;
Session.prototype.custom = {};
Session.prototype.forms = {};
Session.prototype.customer = null;
Session.prototype.sessionID = null;
Session.prototype.clickStream = new (require('../web/ClickStream'))();
Session.prototype.privacy = {};
Session.prototype.sourceCodeInfo = null;
Session.prototype.lastReceivedSourceCodeInfo = null;

module.exports = Session;
