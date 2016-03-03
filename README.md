DW MOCK API
===========

--------------------------

Introduction
------------
This is a mock API or an API stub for the Demandware Script API, the main goal is to make unit testing easier so that not every single Class/Object needs to be stubbed out.

Example usage
-------------

It has been tested to work well in conjunction with mochajs as a testrunner and chai, sinon, sinon-chai and proxyquire as utility libs.

A unit test would then look something like

```
#!javascript
'use strict';

// jscs:disable jsDoc

var describe   = require('mocha').describe;
var it         = require('mocha').it;
var chai       = require("chai");
var sinon      = require("sinon");
var sinonChai  = require("sinon-chai");
var expect     = chai.expect;
var proxyquire = require('proxyquire').noCallThru();

chai.use(sinonChai);

require.extensions['.ds'] = require.extensions['.js'];
require('dw-api-mock/demandware-globals');

// add cartridges dir as module lookup location, the app-module-path package lets you do this nicely
require('app-module-path').addPath(process.cwd() + '/cartridges');

describe("Product Model", function() {

    it("should return a variation model", function() {
	    var ProductModel = require('app_storefront_controller/cartridge/scripts/models/ProductModel');
		
		var instance = new ProductModel(new dw.catalog.Product());
		
		expect(instance.getVariationModel()).to.exist.
	});
});
```

License
-------
Licensed under the current NDA and licensing agreement in place with your organization. (This is explicitly not open source licensing.)