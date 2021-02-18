const Service = require('./Service');
const FTPClient = require('../net/FTPClient');

class FTPService extends Service {
    constructor(configObj) {
        super(configObj);
        this.autoDisconnect = false;
        this.client = new FTPClient();
    }

    isAutoDisconnect() {
        this.autoDisconnect;
    }
    getClient() {
        this.client;
    }
    setAutoDisconnect(b) {
        this.autoDisconnect = b;
        return this.getClient();
    };
    setOperation(name, args) {
        // do nothing
        return this.getClient();
    };
}

module.exports = FTPService;
