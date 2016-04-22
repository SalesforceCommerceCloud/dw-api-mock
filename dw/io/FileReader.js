var Reader = require('./Reader');

var FileReader = function() {
};

FileReader.prototype = Object.create(Reader.prototype);

module.exports = FileReader;
