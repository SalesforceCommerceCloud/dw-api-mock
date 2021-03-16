const ExtensibleObject = require('../object/ExtensibleObject');

class ServiceProfile extends ExtensibleObject {
    constructor() {
        super();
        this.ID = 'ID';
        this.cbCalls = 5;
        this.cbMillis = 10000;
        this.rateLimitCalls = 3;
        this.rateLimitMillis = 10000;
        this.timeoutMillis = 10000;
    }

    getCbCalls() {
        return this.cbCalls;
    }
    getCbMillis() {
        return this.cbMillis;
    }
    getRateLimitCalls() {
        return this.rateLimitCalls;
    }
    getRateLimitMillis() {
        return this.rateLimitMillis;
    }
    getTimeoutMillis() {
        return this.timeoutMillis;
    }
}

module.exports = ServiceProfile;
