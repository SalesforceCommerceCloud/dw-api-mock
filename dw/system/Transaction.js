/**
 * Mock Transaction class.
 * @constructor
 */
function Transaction(){
}

/**
 * Run function in transaction.
 * @param {Function} callback - function to call.
 */
Transaction.wrap = function(callback){
    callback();
}
