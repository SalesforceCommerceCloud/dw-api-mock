var _super = require('./XMLStreamWriter');

var XMLIndentingStreamWriter = function(){};

XMLIndentingStreamWriter.prototype = new _super();

XMLIndentingStreamWriter.prototype.getIndent = function(){};
XMLIndentingStreamWriter.prototype.setIndent = function(){};
XMLIndentingStreamWriter.prototype.getNewLine = function(){};
XMLIndentingStreamWriter.prototype.setNewLine = function(){};
XMLIndentingStreamWriter.prototype.indent=null;
XMLIndentingStreamWriter.prototype.newLine=null;

module.exports = XMLIndentingStreamWriter;
