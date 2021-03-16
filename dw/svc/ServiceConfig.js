const ExtensibleObject = require('../object/ExtensibleObject');
const ServiceCredential = require('./ServiceCredential');
const ServiceProfile = require('./ServiceProfile');

class ServiceConfig extends ExtensibleObject {
    constructor() {
        super();
        this.credential = new ServiceCredential();
        this.ID = 'ID';
        this.profile = new ServiceProfile();
        this.serviceType = 'HTTP';
    }

    getID() {
        return this.ID;
    }
    getCredential() {
        return this.credential;
    }
    getProfile() {
        return this.profile;
    }
    getServiceType() {
        return this.serviceType;
    }
}

module.exports = ServiceConfig;
