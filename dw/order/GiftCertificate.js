var _super = require('../object/ExtensibleObject');

var GiftCertificate = function(){};

GiftCertificate.prototype = new _super();

GiftCertificate.prototype.getMessage = function(){};
GiftCertificate.prototype.getID = function(){};
GiftCertificate.prototype.getDescription = function(){};
GiftCertificate.prototype.getStatus = function(){};
GiftCertificate.prototype.getAmount = function(){};
GiftCertificate.prototype.isEnabled = function(){};
GiftCertificate.prototype.setDescription = function(){};
GiftCertificate.prototype.getGiftCertificateCode = function(){};
GiftCertificate.prototype.getMaskedGiftCertificateCode = function(){};
GiftCertificate.prototype.getMerchantID = function(){};
GiftCertificate.prototype.getSenderName = function(){};
GiftCertificate.prototype.setSenderName = function(){};
GiftCertificate.prototype.getRecipientName = function(){};
GiftCertificate.prototype.setRecipientName = function(){};
GiftCertificate.prototype.getRecipientEmail = function(){};
GiftCertificate.prototype.setRecipientEmail = function(){};
GiftCertificate.prototype.setMessage = function(){};
GiftCertificate.prototype.setStatus = function(){};
GiftCertificate.prototype.setEnabled = function(){};
GiftCertificate.prototype.getBalance = function(){};
GiftCertificate.prototype.message=null;
GiftCertificate.prototype.ID=null;
GiftCertificate.prototype.description=null;
GiftCertificate.prototype.status=null;
GiftCertificate.prototype.amount=null;
GiftCertificate.prototype.giftCertificateCode=null;
GiftCertificate.prototype.maskedGiftCertificateCode=null;
GiftCertificate.prototype.merchantID=null;
GiftCertificate.prototype.senderName=null;
GiftCertificate.prototype.recipientName=null;
GiftCertificate.prototype.recipientEmail=null;
GiftCertificate.prototype.balance=null;

module.exports = GiftCertificate;