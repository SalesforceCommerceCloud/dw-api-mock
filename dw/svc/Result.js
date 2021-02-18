class Result {
    constructor(obj) {
        this.error = undefined;
        this.errorMessage = 'errorMessage';
        this.mockResult = false;
        this.msg = 'msg';
        this.object = obj || {};
        this.ok = true;
        this.status = 'OK';
        this.unavailableReason = 'reason';
    }

    getError() {
        return this.error;
    }
    getErrorMessage() {
        return this.errorMessage;
    }
    getMsg() {
        return this.msg;
    }
    getObject() {
        return this.object;
    }
    getStatus() {
        return this.status;
    }
    getUnavailableReason() {
        return this.unavailableReason;
    }
    isOk() {
        return this.ok;
    }
    isMockResult() {
        return this.mockResult;
    }
    toString() {
        return '';
    }
}

module.exports = Result;
