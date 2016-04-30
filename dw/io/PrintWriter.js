var _super = require('../../dw/io/Writer');

var PrintWriter = function() {};

PrintWriter.prototype = new _super();

PrintWriter.prototype.print = function(str) {};
PrintWriter.prototype.println = function(str) {};
PrintWriter.prototype.println = function() {};

module.exports = PrintWriter;
