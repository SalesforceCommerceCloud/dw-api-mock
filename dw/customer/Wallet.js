var _super = require('./EncryptedObject');

var Wallet = function(){};

Wallet.prototype = new _super();

Wallet.createPaymentInstrument = function(){};
Wallet.getPaymentInstrument = function(){};
Wallet.getPaymentInstruments = function(){};
Wallet.removePaymentInstrument = function(){};


Wallet.prototype.createPaymentInstrument=null;
Wallet.prototype.getPaymentInstrument=null;
Wallet.prototype.getPaymentInstruments=null;
Wallet.prototype.removePaymentInstrument=null;

module.exports = Wallet;
