var _super = require('./FormGroup');

var FormList = function(){};

FormList.prototype = new _super();

FormList.prototype.getSelectManyItems = function(){};
FormList.prototype.getSelectManyObjects = function(){};
FormList.prototype.getSelectOneItem = function(){};
FormList.prototype.getSelectOneObject = function(){};
FormList.prototype.selectManyItems=null;
FormList.prototype.selectManyObjects=null;
FormList.prototype.selectOneItem=null;
FormList.prototype.selectOneObject=null;

module.exports = FormList;