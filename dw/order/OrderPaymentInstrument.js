var _super = require('./PaymentInstrument');

var OrderPaymentInstrument = function(){};

OrderPaymentInstrument.prototype = new _super();

OrderPaymentInstrument.prototype.getCreditCardNumber = function(){};
OrderPaymentInstrument.prototype.getBankAccountNumber = function(){};
OrderPaymentInstrument.prototype.getBankAccountDriversLicense = function(){};
OrderPaymentInstrument.prototype.getPaymentTransaction = function(){};
OrderPaymentInstrument.prototype.getCapturedAmount = function(){};
OrderPaymentInstrument.prototype.getRefundedAmount = function(){};
OrderPaymentInstrument.prototype.isPermanentlyMasked = function(){};
OrderPaymentInstrument.prototype.creditCardNumber=null;
OrderPaymentInstrument.prototype.bankAccountNumber=null;
OrderPaymentInstrument.prototype.bankAccountDriversLicense=null;
OrderPaymentInstrument.prototype.paymentTransaction=null;
OrderPaymentInstrument.prototype.capturedAmount=null;
OrderPaymentInstrument.prototype.refundedAmount=null;

module.exports = OrderPaymentInstrument;
