var Response = function() {};

Response.prototype.setHttpHeader = function() {};
Response.prototype.addHttpHeader = function() {};
Response.prototype.containsHttpHeader = function() {};
Response.prototype.addHttpCookie = function() {};
Response.prototype.redirect = function() {};
Response.prototype.getWriter = function() {
    return Response.prototype.writer;
};
Response.prototype.setContentType = function(contentType) {
    Response.prototype.CONTENT_TYPE = contentType;
};
Response.prototype.CONTENT_TYPE = '';
Response.prototype.writer = new (require('../io/PrintWriter'))();

module.exports = Response;
