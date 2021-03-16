var ServiceConfig = require('./ServiceConfig');
var Result = require('./Result');

class Service {
    constructor(configObj) {
        this.configObj = configObj || {};
        this.configuration = new ServiceConfig();
        this.credentialID = 'credentialID';
        this.mock = false;
        this.requestData = {};
        this.response = {
            text: '{"ok": true}',
            statusCode: 200,
            getText: () => this.response.text,
            getStatusCode: () => this.response.statusCode
        };
        this.throwOnError = false;
        this.URL = 'url';
    }

    call(args) {
        if (this.mock) {
            if (this.configObj.mockFull) {
                return this.configObj.mockFull(this, args);
            }
        }

        if (this.configObj.initServiceClient) {
            this.configObj.initServiceClient(this);
        }

        if (this.configObj.createRequest) {
            const requestBody = this.configObj.createRequest(this, args);
            if (this.configObj.getRequestLogMessage) {
                this.configObj.getRequestLogMessage(requestBody);
            }
        }
        if (this.configObj.execute) {
            this.configObj.execute(this, this.getRequestData());
        }
        if (this.configObj.parseResponse) {
            if (this.configObj.getResponseLogMessage) {
                this.configObj.getResponseLogMessage(this.getResponse());
            }

            return new Result(this.configObj.parseResponse(this, this.getResponse()));
        }

        return new Result();
    }

    getConfiguration() {
        return this.configuration;
    }
    getCredentialID() {
        return this.credentialID;
    }
    getRequestData() {
        return this.requestData;
    }
    getResponse() {
        return this.response;
    }
    getURL() {
        return this.URL;
    }
    isMock() {
        return this.mock;
    }
    isThrowOnError() {
        return this.throwOnError;
    }

    setCredentialID(credentialID) {
        this.credentialID = credentialID;
    }
    setMock() {
        this.mock = true;
    }
    setThrowOnerror() {
        this.throwOnError = true;
    }
    setURL(url) {
        this.URL = url;
    }
}

module.exports = Service;
