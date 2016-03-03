var _super = require('../../dw/util/Iterator');

var SeekableIterator = function(){};

SeekableIterator.prototype = new _super();

SeekableIterator.prototype.hasNext = function(){};
SeekableIterator.prototype.next = function(){};
SeekableIterator.prototype.close = function(){};
SeekableIterator.prototype.asList = function(){};
SeekableIterator.prototype.first = function(){};
SeekableIterator.prototype.__unwrap = function(){};
SeekableIterator.prototype.getCount = function(){};
SeekableIterator.prototype.forward = function(){};
SeekableIterator.prototype.count=null;

module.exports = SeekableIterator;