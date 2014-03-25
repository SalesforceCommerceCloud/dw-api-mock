var _super = require('../object/ExtensibleObject');

var PaymentMethod = function(){};

PaymentMethod.prototype = new _super();

PaymentMethod.prototype.getName = function(){};
PaymentMethod.prototype.getID = function(){};
PaymentMethod.prototype.getDescription = function(){};
PaymentMethod.prototype.isActive = function(){};
PaymentMethod.prototype.getImage = function(){};
PaymentMethod.prototype.isApplicable = function(){};
PaymentMethod.prototype.getPaymentProcessor = function(){};
PaymentMethod.prototype.getActivePaymentCards = function(){};
PaymentMethod.prototype.getApplicablePaymentCards = function(){};
PaymentMethod.prototype.name=null;
PaymentMethod.prototype.ID=null;
PaymentMethod.prototype.description=null;
PaymentMethod.prototype.image=null;
PaymentMethod.prototype.paymentProcessor=null;
PaymentMethod.prototype.activePaymentCards=null;
PaymentMethod.prototype.applicablePaymentCards=null;

module.exports = PaymentMethod;