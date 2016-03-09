var Status = function(status, code, message){
    this.status  = typeof status  !== "undefined" ? status  : null;
    this.code    = typeof code    !== "undefined" ? code    : null;
    this.message = typeof message !== "undefined" ? message : null;
    this.items   = null;
    this.parameters=null;
    this.detail  = null;
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

module.exports = Status;
Status.OK    = 0;
Status.ERROR = 1;