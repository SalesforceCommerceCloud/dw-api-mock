var HashSet = function() {
    this.map = {};
};

HashSet.prototype.add = function(key) {
    this.map[key] = key;
};

HashSet.prototype.contains = function(key) {
    return this.map[key] === key;
};

HashSet.EMPTY_SET = new HashSet();

module.exports = HashSet;
