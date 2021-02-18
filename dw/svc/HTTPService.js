const Service = require('./Service');
const HTTPClient = require('../net/HTTPClient');

class HTTPService extends Service {
    constructor(configObj, requestMethod, headers) {
        super(configObj);
        this.authentication = 'authentication';
        this.cachingTTL = 10000;
        this.client = new HTTPClient();
        this.response = this.client;
        this.encoding = 'UTF-8';
        this.outFile = undefined;
        this.requestMethod = 'GET';

        if (headers) {
            Object.keys(headers).forEach(key => {
                this.addHeader(key, headers[key]);
            });
        }

        if (requestMethod) {
            this.requestMethod = requestMethod;
        }
    }

    addHeader(name, val) {
        this.getClient().setRequestHeader(name, val);
        return this;
    }

    addParam(name, val) {
        this.setURL(this.getURL() + (this.getURL().indexOf('?') === -1 ? '?' : '&') + name + '=' + val);
        return this;
    }

    getAuthentication() {
        return this.authentication;
    }

    getCachingTTL() {
        return this.cachingTTL;
    }

    getClient() {
        return this.client;
    }

    getEncoding() {
        return this.encoding;
    }

    getOutFile() {
        return this.outFile;
    }

    getRequestMethod() {
        return this.requestMethod;
    }

    setAuthentication(authentication) {
        this.authentication = authentication;
        return this;
    }

    setCachingTTL(ttl) {
        this.cachingTTL = ttl;
        return this;
    }

    setEncoding(encoding) {
        this.encoding = encoding;
        return this;
    }

    setOutFile(outFile) {
        this.outFile = outFile;
        return this;
    }

    setRequestMethod(requestMethod) {
        this.requestMethod = requestMethod;
        return this;
    }
}

module.exports = HTTPService;
