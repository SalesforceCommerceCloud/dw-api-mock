var _super = require('../util/Iterator');

var LoopIterator = function(){};

LoopIterator.prototype = new _super();

LoopIterator.prototype.getLength = function(){};
LoopIterator.prototype.getIndex = function(){};
LoopIterator.prototype.getCount = function(){};
LoopIterator.prototype.getStep = function(){};
LoopIterator.prototype.getBegin = function(){};
LoopIterator.prototype.getEnd = function(){};
LoopIterator.prototype.isFirst = function(){};
LoopIterator.prototype.isLast = function(){};
LoopIterator.prototype.isOdd = function(){};
LoopIterator.prototype.isEven = function(){};
LoopIterator.prototype.length=null;
LoopIterator.prototype.index=null;
LoopIterator.prototype.count=null;
LoopIterator.prototype.step=null;
LoopIterator.prototype.begin=null;
LoopIterator.prototype.end=null;

module.exports = LoopIterator;
