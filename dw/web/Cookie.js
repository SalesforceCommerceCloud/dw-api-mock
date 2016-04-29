var Cookie = function(name, value) {
    this.name = name;
    this.value = value;
};

Cookie.prototype.getName = function() {
    return this.name;
};
Cookie.prototype.getValue = function() {
    return this.value;
};
Cookie.prototype.setValue = function(value) {
    this.value = value;
};

Cookie.prototype.getComment = function() {
    return this.comment;
};
Cookie.prototype.setComment = function(comment) {
    this.comment = comment;
};
Cookie.prototype.getDomain = function() {
    return this.domain;
};
Cookie.prototype.setDomain = function(domain) {
    this.domain = domain;
};
Cookie.prototype.getMaxAge = function() {
    return this.maxAge;
};
Cookie.prototype.setMaxAge = function(maxAge) {
    this.maxAge = maxAge;
};
Cookie.prototype.getPath = function() {
    return this.path;
};
Cookie.prototype.setPath = function(path) {
    this.path = path;
};
Cookie.prototype.getSecure = function() {
    return this.secure;
};
Cookie.prototype.setSecure = function(secure) {
    return this.secure;
};
Cookie.prototype.getVersion = function() {
    return this.version;
};
Cookie.prototype.setVersion = function(version) {
    this.version = version;
};
Cookie.prototype.name = null;
Cookie.prototype.value = null;
Cookie.prototype.path = null;
Cookie.prototype.comment = null;
Cookie.prototype.domain = null;
Cookie.prototype.version = null;
Cookie.prototype.maxAge = null;
Cookie.prototype.secure = null;

module.exports = Cookie;
