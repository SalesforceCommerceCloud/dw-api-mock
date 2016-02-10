var Iterator = function(array) {
    this.array = array;
    this.index = 0;
};

Iterator.prototype.hasNext = function() {
    return this.array && this.index < this.array.length;
};

Iterator.prototype.next = function() {
    var result;
    if (this.array && this.index < this.array.length) {
        result = this.array[this.index];
        this.index = this.index + 1;
        return result;
    }

    throw new Error('Iterator has no more elements');
};

module.exports = Iterator;
