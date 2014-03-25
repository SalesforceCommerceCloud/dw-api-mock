var _super = require('../object/ExtensibleObject');

var PaymentTransaction = function(){};

PaymentTransaction.prototype = new _super();

PaymentTransaction.prototype.getType = function(){};
PaymentTransaction.prototype.getAmount = function(){};
PaymentTransaction.prototype.getPaymentInstrument = function(){};
PaymentTransaction.prototype.getTransactionID = function(){};
PaymentTransaction.prototype.setTransactionID = function(){};
PaymentTransaction.prototype.setPaymentProcessor = function(){};
PaymentTransaction.prototype.setAmount = function(){};
PaymentTransaction.prototype.getPaymentProcessor = function(){};
PaymentTransaction.prototype.setType = function(){};
PaymentTransaction.prototype.type=null;
PaymentTransaction.prototype.amount=null;
PaymentTransaction.prototype.paymentInstrument=null;
PaymentTransaction.prototype.transactionID=null;
PaymentTransaction.prototype.paymentProcessor=null;

module.exports = PaymentTransaction;