var ReturnCase = function(){};

ReturnCase.prototype.getStatus = function(){};
ReturnCase.prototype.getReturns = function(){};
ReturnCase.prototype.getItems = function(){};
ReturnCase.prototype.getDocumentNo = function(){};
ReturnCase.prototype.getInvoiceNumber = function(){};
ReturnCase.prototype.getRMANumber = function(){};
ReturnCase.prototype.createReturn = function(){};
ReturnCase.prototype.createItem = function(){};
ReturnCase.prototype.status=null;
ReturnCase.prototype.returns=null;
ReturnCase.prototype.items=null;
ReturnCase.prototype.documentNo=null;
ReturnCase.prototype.invoiceNumber=null;
ReturnCase.prototype.rMANumber=null;

module.exports = ReturnCase;
