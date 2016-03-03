var _super = require('./FormElement');

var FormField = function(){};

FormField.prototype = new _super();

FormField.prototype.getValue = function(){};
FormField.prototype.getType = function(){};
FormField.prototype.setValue = function(){};
FormField.prototype.getDescription = function(){};
FormField.prototype.getOptions = function(){};
FormField.prototype.getError = function(){};
FormField.prototype.getMaxValue = function(){};
FormField.prototype.getRegEx = function(){};
FormField.prototype.getHtmlValue = function(){};
FormField.prototype.setHtmlValue = function(){};
FormField.prototype.setOptions = function(){};
FormField.prototype.getSelectedOption = function(){};
FormField.prototype.getSelectedOptionObject = function(){};
FormField.prototype.isChecked = function(){};
FormField.prototype.isSelected = function(){};
FormField.prototype.isMandatory = function(){};
FormField.prototype.getMinLength = function(){};
FormField.prototype.getMaxLength = function(){};
FormField.prototype.getMinValue = function(){};
FormField.prototype.getLabel = function(){};
FormField.prototype.value=null;
FormField.prototype.type=null;
FormField.prototype.description=null;
FormField.prototype.options=null;
FormField.prototype.error=null;
FormField.prototype.maxValue=null;
FormField.prototype.regEx=null;
FormField.prototype.htmlValue=null;
FormField.prototype.selectedOption=null;
FormField.prototype.selectedOptionObject=null;
FormField.prototype.minLength=null;
FormField.prototype.maxLength=null;
FormField.prototype.minValue=null;
FormField.prototype.label=null;

module.exports = FormField;