var MessageDigest = function(){};

MessageDigest.prototype.digest = function() { return function () {}; };
MessageDigest.prototype.digestBytes = function(bytes) { return bytes; };
MessageDigest.prototype.updateBytes = function(bytes) {};

module.exports = MessageDigest;