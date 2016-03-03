var _super = require('./FormGroup');

var Form = function(){};

Form.prototype = new _super();

Form.prototype.getSecureKeyHtmlName = function(){};
Form.prototype.getSecureKeyValue = function(){};
Form.prototype.secureKeyHtmlName=null;
Form.prototype.secureKeyValue=null;

module.exports = Form;