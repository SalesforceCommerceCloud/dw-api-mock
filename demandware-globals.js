/**
 *   simple class which generates getters and setters for properties
 */
var Bean = function(simpleObject) {
	var properties = [];
	for (var property in simpleObject) {
		if (typeof simpleObject[property] !== 'function') {
			properties.push(property);
		}
	}

	properties.forEach(function(property) {
		var prefix;
		if (typeof simpleObject[property] === 'boolean') {
			prefix = 'is';
		} else {
			prefix = 'get';
		}

		simpleObject[prefix + property.substring(0, 1).toUpperCase() + property.substring(1, property.length)] = function() {
			return simpleObject[property];
		};

		simpleObject['set' + property.substring(0, 1).toUpperCase() + property.substring(1, property.length)] = function(value) {
			simpleObject[property] = value;
		};
	});

	return simpleObject;
};

global.dw = require('./scriptapi.js').dw;

global.empty = function(obj) {
	if (obj === null || obj === undefined || obj === '' || obj === 0 || (typeof (obj) !== 'function' && obj.length !== undefined && obj.length === 0)) {
		return true;
	} else {
		return false;
	}
};

global.Fault = function() {};

global.response = new dw.system.Response();
global.request = {
	httpParameterMap: {
		initializeQueryString: function(queryString) {
			var keyValuePairs = queryString.split('&');
			for (var i = 0; i < keyValuePairs.length; i++) {
				this.setParameter(keyValuePairs[i]);
			}
		},

		setNonSubmittedKeys: function(keys) {
			for (var i = 0; i < keys.length; i++) {
				keys[i] = new Bean({
					value: null,
					stringValue: null,
					intValue: null,
					doubleValue: null,
					submitted: false
				});
			}
		},

		setParameter: function(keyValuePair) {
			if (keyValuePair.indexOf('=') > 0) {
				var key = keyValuePair.split('=')[0];
				var value = keyValuePair.split('=')[1];
				this[key] = new Bean({
					value: value,
					intValue: parseInt(value),
					doubleValue: parseFloat(value),
					stringValue: value,
					submitted: true
				});
			} else {
				throw 'Invalid Querystring';
			}
		},

		destroyParameters: function() {
			for (var key in this) {
				if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
					delete this[key];
				}
			}			
		}
	},
	httpSecure: true,
	isHttpSecure: function() {
		return true;
	}
};
global.request.prototype = dw.system.Request;

global.customer = new dw.customer.Customer();

global.XML = function(obj) {
	// allow construction with plain objects to simulate simple XML cases (i.e. without namespaces)
	if (obj && typeof (obj) === 'object') {
		for (var i in obj) {
			this[i] = obj[i];
		}

		return this;
	}

	/* sorry for commenting out. This is to capture the todo
	 else if (obj && typeof (obj) === 'string') {
		// @TODO parse string with xml2js
	}
	*/
	return {};
};

global.XML.prototype.toXMLString = function() {
	return 'NOT IMPLEMENTED';
};

global.PIPELET_NEXT = 1;
global.PIPELET_ERROR = 0;
