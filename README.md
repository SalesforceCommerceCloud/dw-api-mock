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

All the dependencies can be added to the root of your repository into a `package.json` file and the unit tests would be inside a test folder, so you would have

* cartridges
* site_import
* test

Sample package.json

```
{
  "name": "my-repo",
  "version": "1.0.0",
  "description": "A repo description",
  "main": "index.js",
  "directories": {
    "test": "test"
  },
  "devDependencies": {
    "app-module-path": "^1.0.4",
    "chai": "^3.4.1",
    "dw-api-mock": "git+ssh://bitbucket.org/demandware/dw-api-mock.git",
    "istanbul": "^0.4.1",
    "mocha": "^2.3.4",
    "proxyquire": "^1.7.3",
    "sinon": "^1.17.2",
    "sinon-chai": "^2.8.0",
    "xunit-file": "0.0.7"
  },
  "scripts": {
    "test": "mocha test/*",
    "coverage": "istanbul cover ./node_modules/mocha/bin/_mocha"
  },
  "keywords": [
    "myrepo"
  ],
  "author": "Your Name",
  "license": "UNLICENSED",
  "homepage": "www.yourhomepage.com"
}
```

Now you can simply run
```
#!bash
$ npm install
$ mocha test/*
```

License
-------
Licensed under the current NDA and licensing agreement in place with your organization. (This is explicitly not open source licensing.)