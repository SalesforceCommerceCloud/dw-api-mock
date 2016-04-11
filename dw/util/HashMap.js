module.exports = function(map) {
    // simulate a key-value storage
    var internalMap = map || {};

    return {

        containsKey: function(key) {
            return internalMap.hasOwnProperty(key);
        },

        get: function(key) {
            return internalMap[key];
        },

        put: function(key, value) {
            internalMap[key] = value;
        },

        entrySet: function() {
            var set = [];
            var key;
            for (key in internalMap) {
                if (internalMap.hasOwnProperty(key)) {
                    set.push({
                        key: key,
                        value: internalMap[key]
                    });
                }
            }

            return set;
        }
    };
};

exports.PROPERTY_NOT_FOUND = function() {};

exports.EMPTY_MAP = function() {};

exports.PROPERTY_NOT_DECLARED = function() {};
