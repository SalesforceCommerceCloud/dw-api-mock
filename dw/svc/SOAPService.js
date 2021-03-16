const Service = require('./Service');

class SoapService extends Service {
    constructor(configObj) {
        super(configObj);
        this.authentication = 'authentication';
        this.serviceClient = {};
    }

    getAuthentication() {
        this.authentication;
    }
    getServiceClient() {
        this.serviceClient;
    }
    setAuthentication(authentication) {
        this.authentication = authentication;
        return this;
    }
    setServiceClient(o) {
        this.serviceClient = o;
        return this;
    }
}

module.exports = SoapService;
