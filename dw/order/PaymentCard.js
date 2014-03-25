var _super = require('../object/ExtensibleObject');

var PaymentCard = function(){};

PaymentCard.prototype = new _super();

PaymentCard.prototype.getName = function(){};
PaymentCard.prototype.getDescription = function(){};
PaymentCard.prototype.isActive = function(){};
PaymentCard.prototype.getImage = function(){};
PaymentCard.prototype.getCardType = function(){};
PaymentCard.prototype.isApplicable = function(){};
PaymentCard.prototype.name=null;
PaymentCard.prototype.description=null;
PaymentCard.prototype.image=null;
PaymentCard.prototype.cardType=null;

module.exports = PaymentCard;