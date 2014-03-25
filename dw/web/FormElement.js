var FormElement = function(){};

FormElement.prototype.getParent = function(){};
FormElement.prototype.isValid = function(){};
FormElement.prototype.__id = function(){};
FormElement.prototype.getHtmlName = function(){};
FormElement.prototype.getFormId = function(){};
FormElement.prototype.getDynamicHtmlName = function(){};
FormElement.prototype.clearFormElement = function(){};
FormElement.prototype.invalidateFormElement = function(){};
FormElement.prototype.parent=null;
FormElement.prototype.htmlName=null;
FormElement.prototype.formId=null;
FormElement.prototype.dynamicHtmlName=null;

module.exports = FormElement;