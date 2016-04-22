var Iterator = require('./Iterator');

var SeekableIterator = function(array) {
    Iterator.call(this, array);
};

SeekableIterator.prototype = Object.create(Iterator.prototype);

SeekableIterator.prototype.close = function() {};

SeekableIterator.prototype.first = function() {};

SeekableIterator.prototype.__unwrap = function() {};

SeekableIterator.prototype.getCount = function() {};

SeekableIterator.prototype.forward = function() {};

SeekableIterator.prototype.count = null;

module.exports = SeekableIterator;
