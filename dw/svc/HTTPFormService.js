const HTTPService = require('./HTTPService');

class HTTPFormService extends HTTPService {
    constructor(configObj) {
        super(configObj, 'POST', {
            'content-type': 'application/x-www-form-urlencoded'
        })
    }
}

module.exports = HTTPFormService;
