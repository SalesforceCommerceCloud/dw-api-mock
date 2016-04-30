var InvoiceItem = function(){};

InvoiceItem.prototype.getQuantity = function(){};
InvoiceItem.prototype.getBasePrice = function(){};
InvoiceItem.prototype.setCapturedAmount = function(){};
InvoiceItem.prototype.setRefundedAmount = function(){};
InvoiceItem.prototype.getTaxBasis = function(){};
InvoiceItem.prototype.getInvoiceNumber = function(){};
InvoiceItem.prototype.getCapturedAmount = function(){};
InvoiceItem.prototype.getRefundedAmount = function(){};
InvoiceItem.prototype.getItemId = function(){};
InvoiceItem.prototype.getNetPrice = function(){};
InvoiceItem.prototype.getGrossPrice = function(){};
InvoiceItem.prototype.getTax = function(){};
InvoiceItem.prototype.quantity=null;
InvoiceItem.prototype.basePrice=null;
InvoiceItem.prototype.taxBasis=null;
InvoiceItem.prototype.invoiceNumber=null;
InvoiceItem.prototype.capturedAmount=null;
InvoiceItem.prototype.refundedAmount=null;
InvoiceItem.prototype.itemId=null;
InvoiceItem.prototype.netPrice=null;
InvoiceItem.prototype.grossPrice=null;
InvoiceItem.prototype.tax=null;

module.exports = InvoiceItem;
