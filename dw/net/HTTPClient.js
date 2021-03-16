class HTTPClient {
    constructor() {
        this.responseHeaders = {};
        this.requestHeaders = {};
        this.text = '{"ok": true}';
        this.statusCode = 200;
    }

    getTimeout() {
        return this.timeout;
    }
    setTimeout (timeout) {
        this.timeout = timeout;
    }
    enableCaching () {
        this.cache = true;
    }
    getStatusCode() {
        return this.statusCode;
    }
    getStatusMessage() {
        return this.statusMessage;
    }
    getErrorText () {
        return this.errorText;
    }
    getAllResponseHeaders() {
        return this.responseHeaders;
    }
    getResponseHeader(key) {
        return this.responseHeaders[key];
    }
    setRequestHeader(key, value) {
        this.requestHeaders[key] = value;
    }
    open() {}
    send() {}
    sendAndReceiveToFile() {}
    sendMultiPart() {}
    getText() {
        return this.text;
    }
}

module.exports = HTTPClient;
