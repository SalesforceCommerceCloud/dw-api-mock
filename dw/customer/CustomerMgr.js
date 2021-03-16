var CustomerMgr = function(){};

const CustomerList = require('./CustomerList');
const customerList = new CustomerList();

CustomerMgr.getCustomerGroups = function(){};
CustomerMgr.getProfile = function(){};
CustomerMgr.describeProfileType = function(){};
CustomerMgr.getRegisteredCustomerCount = function(){};
CustomerMgr.queryProfile = function(){};
CustomerMgr.processProfiles = function(){};
CustomerMgr.queryProfiles = function(){};
CustomerMgr.searchProfile = function(){};
CustomerMgr.searchProfiles = function(){};
CustomerMgr.getCustomerGroup = function(){};
CustomerMgr.createExternallyAuthenticatedCustomer = function(){};
CustomerMgr.getExternallyAuthenticatedCustomerProfile = function(){};
CustomerMgr.loginExternallyAuthenticatedCustomer = function(){};
CustomerMgr.getCustomerByCustomerNumber = function(){};
CustomerMgr.createCustomer = function() {};
CustomerMgr.getSiteCustomerList = () => customerList;
CustomerMgr.prototype.customerGroups=null;
CustomerMgr.prototype.profile=null;
CustomerMgr.prototype.registeredCustomerCount=null;
CustomerMgr.prototype.customerGroup=null;
CustomerMgr.prototype.externallyAuthenticatedCustomerProfile=null;
CustomerMgr.prototype.getCustomerByCustomerNumber=null;
CustomerMgr.prototype.createCustomer=null;
CustomerMgr.prototype.siteCustomerList = customerList;

module.exports = CustomerMgr;