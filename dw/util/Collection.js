class Collection {
	constructor(items) {
		this.items = items || [];
	}

	remove(obj) {}
	size() {
		return this.items.length;
	}
	isEmpty() {
		return this.items.length === 0;
	}
	add(e) {
		this.items.push(e);
	}
	getLength() {
		return this.items.length;
	}
	toArray() {
		return this.items;
	}

	createFromArray = function(arr) {
		return new Collection(arr);
	}
}

module.exports = Collection;
