var _super = require('../order/PaymentInstrument');

var CustomerPaymentInstrument = function(){};

CustomerPaymentInstrument.prototype = new _super();

CustomerPaymentInstrument.prototype.getCreditCardNumber = function(){};
CustomerPaymentInstrument.prototype.getBankAccountNumber = function(){};
CustomerPaymentInstrument.prototype.getBankAccountDriversLicense = function(){};
CustomerPaymentInstrument.prototype.creditCardNumber=null;
CustomerPaymentInstrument.prototype.bankAccountNumber=null;
CustomerPaymentInstrument.prototype.bankAccountDriversLicense=null;

module.exports = CustomerPaymentInstrument;
