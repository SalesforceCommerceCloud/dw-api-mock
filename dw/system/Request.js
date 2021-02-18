class Request {
    constructor() {
        this.locale = undefined;
        this.custom = {};
        this.httpCookies = [];
        this.httpParameterMap = {
            initializeQueryString: function(queryString) {
                var keyValuePairs = queryString.split('&');
                for (var i = 0; i < keyValuePairs.length; i++) {
                    this.setParameter(keyValuePairs[i]);
                }
            },

            /**
            * Returns a sub-map containing all parameters that start with the given prefix.
            */
            getParameterMap: function(prefix) {
                var result = [];
                for (var key in this) {
                    if (key.indexOf(prefix) === 0) {
                        result.push(this[key]);
                    }
                }

                return result;
            },

            setNonSubmittedKeys: function(keys) {
                var i;
                var key;
                for (i = 0; i < keys.length; i++) {
                    key = keys[i];
                    this[key] = new Bean({
                        value: null,
                        stringValue: null,
                        intValue: null,
                        doubleValue: null,
                        submitted: false
                    });
                }
            },

            setParameter: function(keyValuePair) {
                if (keyValuePair.indexOf('=') > 0) {
                    var key = keyValuePair.split('=')[0];
                    var value = keyValuePair.split('=').slice(1).join('=');
                    this[key] = new Bean({
                        value: value,
                        intValue: parseInt(value),
                        doubleValue: parseFloat(value),
                        stringValue: value,
                        submitted: true,
                        booleanValue: value === 'true' ? true : false
                    });
                } else {
                    throw 'Invalid Querystring';
                }
            },

            destroyParameters: function() {
                for (var key in this) {
                    if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
                        delete this[key];
                    }
                }
            },

            get: function(key) {
                return this[key] || new Bean({
                        value: "",
                        intValue: 0,
                        doubleValue: 0,
                        stringValue: "",
                        submitted: false
                    });
            },

            isParameterSubmitted: function(key) {
                return this.get(key).submitted;
            }
        }
    }

    getLocale() {
        return this.locale;
    }

    getCustom() {
        return this.custom;
    }

    getSession() {
        return new (require('../system/Session'))();
    }

    isHttpSecure() {
        return this.isHttpSecure;
    }

    getRequestID() {
        return this.requestID;
    }
    isHttpRequest() {
        return this.isHttpRequest;
    }
    getHttpCookies() {
        return this.httpCookies;
    }
    addHttpCookie(cookie) {
        this.httpCookies.push(cookie);
    }
    getHttpPath() {
        return this.httpPath;
    }
    getHttpProtocol() {
        return this.httpProtocol;
    }
    getHttpQueryString() {
        return this.httpQueryString;
    }
    getHttpLocale() {
        return this.httpLocale;
    }
    getHttpReferer() {
        return this.httpReferer;
    }
    getHttpUserAgent() {
        return this.httpuserAgent;
    }
    getHttpRemoteAddress() {
        return this.httpRemoteAddress;
    }
    getHttpHost() {
        return this.httpHost;
    }
    getHttpParameters() {
        return this.httpParameterMap;
    }
    getHttpHeaders() {
        return this.httpHeaders;
    }
    getGeolocation() {
        return this.geolocation;
    }
}

module.exports = Request;
