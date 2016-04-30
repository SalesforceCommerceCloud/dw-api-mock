var _super = require('./FormElement');

var FormAction = function(){};

FormAction.prototype = new _super();

FormAction.prototype.getObject = function(){};
FormAction.prototype.getDescription = function(){};
FormAction.prototype.getLabel = function(){};
FormAction.prototype.isSubmitted = function(){};
FormAction.prototype.isTriggered = function(){};
FormAction.prototype.getX = function(){};
FormAction.prototype.getY = function(){};
FormAction.prototype.object=null;
FormAction.prototype.description=null;
FormAction.prototype.label=null;
FormAction.prototype.X=null;
FormAction.prototype.Y=null;

module.exports = FormAction;