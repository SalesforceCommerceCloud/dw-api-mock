const Service = require('./Service');
const FTPService = require('./FTPService');
const HTTPFormService = require('./HTTPFormService');
const HTTPService = require('./HTTPService');
const SOAPService = require('./SOAPService');

class LocalServiceRegistry {
    constructor() {}

    static createService(serviceId, configObj) {
        if (!serviceId) {
            throw new Error();
        }

        if (serviceId.toLowerCase().indexOf('http') > -1) {
            return new HTTPService(configObj);
        } else if (serviceId.toLowerCase().indexOf('httpForm') > -1) {
            return new HTTPFormService(configObj);
        } else if (serviceId.toLowerCase().indexOf('soap') > -1) {
            return new SOAPService(configObj);
        } else if (serviceId.toLowerCase().indexOf('ftp') > -1) {
            return new FTPService(configObj);
        }

        return new Service(configObj);
    };
}

module.exports = LocalServiceRegistry;
