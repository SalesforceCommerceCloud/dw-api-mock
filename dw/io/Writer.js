var Writer = function() {};

Writer.prototype.close = function() {};
Writer.prototype.flush = function() {};
Writer.prototype.write = function(str) {};
Writer.prototype.write = function(str, off, len) {};

module.exports = Writer;
