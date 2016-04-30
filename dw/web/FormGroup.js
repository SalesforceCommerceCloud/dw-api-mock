var _super = require('./FormElement');

var FormGroup = function(){};

FormGroup.prototype = new _super();

FormGroup.prototype.getObject = function(){};
FormGroup.prototype.accept = function(){};
FormGroup.prototype.__has = function(){};
FormGroup.prototype.__put = function(){};
FormGroup.prototype.__getIds = function(){};
FormGroup.prototype.__empty = function(){};
FormGroup.prototype.__delete = function(){};
FormGroup.prototype.__get = function(){};
FormGroup.prototype.getError = function(){};
FormGroup.prototype.getSubmittedAction = function(){};
FormGroup.prototype.getTriggeredAction = function(){};
FormGroup.prototype.getChildCount = function(){};
FormGroup.prototype.copyFrom = function(){};
FormGroup.prototype.copyTo = function(){};
FormGroup.prototype.object=null;
FormGroup.prototype.error=null;
FormGroup.prototype.submittedAction=null;
FormGroup.prototype.triggeredAction=null;
FormGroup.prototype.childCount=null;

module.exports = FormGroup;