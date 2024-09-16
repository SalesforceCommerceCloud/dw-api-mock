const AuthenticationStatus = function() {}

AuthenticationStatus.prototype.getCustomer = function getCustomer() {}
AuthenticationStatus.prototype.getStatus = function getStatus() {}
AuthenticationStatus.prototype.isAuthenticated = function isAuthenticated() {}

AuthenticationStatus.AUTH_OK = "AUTH_OK";
AuthenticationStatus.ERROR_CUSTOMER_DISABLED = "ERROR_CUSTOMER_DISABLED";
AuthenticationStatus.ERROR_CUSTOMER_LOCKED = "ERROR_CUSTOMER_LOCKED";
AuthenticationStatus.ERROR_CUSTOMER_NOT_FOUND = "ERROR_CUSTOMER_NOT_FOUND";
AuthenticationStatus.ERROR_PASSWORD_EXPIRED = "ERROR_PASSWORD_EXPIRED";
AuthenticationStatus.ERROR_PASSWORD_MISMATCH = "ERROR_PASSWORD_MISMATCH";

module.exports = AuthenticationStatus;
