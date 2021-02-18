module.exports = {
	get: function(key, loader) {
		if (this[key]) {
			return this[key];
		}

		if (loader) {
			return loader();
		}

		return undefined;
	},
	invalidate: function(key) {},
	put: function(key, value) {
		this[key] = value;
	},
};
