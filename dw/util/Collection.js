module.exports = function() {
	var _items = [];

	return {
		remove: function(obj) {},
		size: function() {},
		isEmpty: function() {},
		add: function(e) {
			_items.push(e);
		},
		getLength: function () {
			return _items.length;
		},
	};
};

/**
 * Supplements an existing JavaScript array with Demandware collection methods.
 * This is useful when you have a unit test where the method you're testing
 * expects a Demandware collection.
 */
module.exports.createFromArray = function(arr) {
	arr.size = function() {
		return arr.length;
	};

	arr.remove = function(obj) {
		arr.splice(arr.indexOf(obj), 1);
	};

	return arr;
};
