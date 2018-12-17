const SecureEncoder = {};
/**
 * Encodes a given input for use in a general HTML context.
 * @param {String} input
 */
SecureEncoder.forHtmlContent = function(input){};

/**
 * Encodes a given input for use in an HTML Attribute guarded by a double quote.
 * @param {String} input
 */
SecureEncoder.forHtmlInDoubleQuoteAttribute = function(input){};

/**
 * Encodes a given input for use in an HTML Attribute guarded by a single quote.
 * @param {String} input
 */
SecureEncoder.forHtmlInSingleQuoteAttribute = function(input){};

/**
 * Encodes a given input for use in an HTML Attribute left unguarded.
 * @param {String} input
 */
SecureEncoder.forHtmlUnquotedAttribute = function(input){};

/**
 * Encodes a given input for use in JavaScript inside an HTML attribute.
 * @param {String} input
 */
SecureEncoder.forJavaScriptInAttribute = function(input){};

/**
 * Encodes a given input for use in JavaScript inside an HTML block.
 * @param {String} input
 */
SecureEncoder.forJavaScriptInBlock = function(input){};

/**
 * Encodes a given input for use in JavaScript inside an HTML context.
 * @param {String} input
 */
SecureEncoder.forJavaScriptInHTML = function(input){};

/**
 * Encodes a given input for use in JavaScript inside a JavaScript source file.
 * @param {String} input
 */
SecureEncoder.forJavaScriptInSource = function(input){};

/**
 * Encodes a given input for use in a JSON Object Value to prevent escaping into a trusted context.
 * @param {String} input
 */
SecureEncoder.forJSONValue = function(input){};

/**
 * Encodes a given input for use as a component of a URI.
 * @param {String} input
 */
SecureEncoder.forUriComponent = function(input){};

/**
 * Encodes a given input for use as a component of a URI.
 * @param {String} input
 */
SecureEncoder.forUriComponentStrict = function(input){};

/**
 * Encodes a given input for use in an XML comments.
 * @param {String} input
 */
SecureEncoder.forXmlCommentContent = function(input){};

/**
 * Encodes a given input for use in a general XML context.
 * @param {String} input
 */
SecureEncoder.forXmlContent = function(input){};

/**
 * Encodes a given input for use in an XML attribute guarded by a double quote.
 * @param {String} input
 */
SecureEncoder.forXmlInDoubleQuoteAttribute = function(input){};

/**
 * Encodes a given input for use in an XML attribute guarded by a single quote.
 * @param {String} input
 */
SecureEncoder.forXmlInSingleQuoteAttribute = function(input){};

module.exports = SecureEncoder;
