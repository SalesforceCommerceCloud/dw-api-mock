const ExtensibleObject = require('../object/ExtensibleObject');

class ServiceCredential extends ExtensibleObject {
    constructor() {
        super();
        this.ID = 'ID';
        this.password = 'password';
        this.URL = 'url';
        this.user = 'user';
        this.custom = {
            jsonData: '{"data": "data"}'
        };
    }

    getID() {
        return this.ID;
    }
    getPassword() {
        return this.password;
    }
    getURL() {
        return this.URL;
    }
    getUser() {
        return this.user;
    }
    getCustom() {
        return this.custom;
    }
}


module.exports = ServiceCredential;
