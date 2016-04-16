/**
 * Mock Transaction class.
 * @constructor
 */
function Transaction() {
}

/**
 * Run function in transaction.
 * @param {Function} callback - function to call.
 */
Transaction.wrap = function(callback) {
    return callback();
};

Transaction.begin = function() {
};

Transaction.commit = function() {
};

Transaction.rollback = function() {
};

module.exports = Transaction;
