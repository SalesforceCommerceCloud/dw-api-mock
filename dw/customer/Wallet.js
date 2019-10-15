var _super = require('./EncryptedObject');

var Wallet = function(){};

Wallet.prototype = new _super();

Wallet.prototype.createPaymentInstrument = function(){};
Wallet.prototype.getPaymentInstrument = function(){};
Wallet.prototype.getPaymentInstruments = function(){};
Wallet.prototype.removePaymentInstrument = function(){};


Wallet.prototype.createPaymentInstrument=null;
Wallet.prototype.getPaymentInstrument=null;
Wallet.prototype.getPaymentInstruments=null;
Wallet.prototype.removePaymentInstrument=null;

module.exports = Wallet;
