var _super = require('./LineItem');

var GiftCertificateLineItem = function(){};

GiftCertificateLineItem.prototype = new _super();

GiftCertificateLineItem.prototype.getMessage = function(){};
GiftCertificateLineItem.prototype.getGiftCertificateID = function(){};
GiftCertificateLineItem.prototype.setGiftCertificateID = function(){};
GiftCertificateLineItem.prototype.setShipment = function(){};
GiftCertificateLineItem.prototype.getProductListItem = function(){};
GiftCertificateLineItem.prototype.getSenderName = function(){};
GiftCertificateLineItem.prototype.setSenderName = function(){};
GiftCertificateLineItem.prototype.getRecipientName = function(){};
GiftCertificateLineItem.prototype.setRecipientName = function(){};
GiftCertificateLineItem.prototype.getRecipientEmail = function(){};
GiftCertificateLineItem.prototype.setRecipientEmail = function(){};
GiftCertificateLineItem.prototype.setMessage = function(){};
GiftCertificateLineItem.prototype.getShipment = function(){};
GiftCertificateLineItem.prototype.message=null;
GiftCertificateLineItem.prototype.giftCertificateID=null;
GiftCertificateLineItem.prototype.productListItem=null;
GiftCertificateLineItem.prototype.senderName=null;
GiftCertificateLineItem.prototype.recipientName=null;
GiftCertificateLineItem.prototype.recipientEmail=null;
GiftCertificateLineItem.prototype.shipment=null;

module.exports = GiftCertificateLineItem;
