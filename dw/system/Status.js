var Status = function(status, code, message){
    this.status  = status  || null;
    this.code    = code    || null;
    this.message = message || null;
};

Status.prototype.getMessage = function(){};
Status.prototype.isError = function(){};
Status.prototype.getStatus = function(){};
Status.prototype.getDetails = function(){};
Status.prototype.getCode = function(){};
Status.prototype.getItems = function(){};
Status.prototype.addItem = function(){};
Status.prototype.getParameters = function(){};
Status.prototype.getDetail = function(){};
Status.prototype.addDetail = function(){};
Status.prototype.message=null;
Status.prototype.status=null;
Status.prototype.details=null;
Status.prototype.code=null;
Status.prototype.items=null;
Status.prototype.parameters=null;
Status.prototype.detail=null;

module.exports = Status;