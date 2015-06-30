module.exports = function() {
    // simulate a key-value storage
    var internalMap = {};

    return {
        get: function(key) {
            return internalMap[key];
        },

        put: function(key, value) {
            internalMap[key] = value;
        }
    };
};

exports.PROPERTY_NOT_FOUND = function(){};
exports.EMPTY_MAP = function(){};
exports.PROPERTY_NOT_DECLARED = function(){};
