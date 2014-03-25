var Customer = function(){};

Customer.prototype.isRegistered = function(){};
Customer.prototype.getID = function(){};
Customer.prototype.getCustomerGroups = function(){};
Customer.prototype.getActiveData = function(){};
Customer.prototype.isExternallyAuthenticated = function(){};
Customer.prototype.isAuthenticated = function(){};
Customer.prototype.getProfile = function(){};
Customer.prototype.getOrderHistory = function(){};
Customer.prototype.isMemberOfCustomerGroup = function(){};
Customer.prototype.getProductLists = function(){};
Customer.prototype.getAddressBook = function(){};
Customer.prototype.getNote = function(){};
Customer.prototype.setNote = function(){};
Customer.prototype.isAnonymous = function(){};
Customer.prototype.ID=null;
Customer.prototype.customerGroups=null;
Customer.prototype.activeData=null;
Customer.prototype.profile=null;
Customer.prototype.orderHistory=null;
Customer.prototype.productLists=null;
Customer.prototype.addressBook=null;
Customer.prototype.note=null;

module.exports = Customer;