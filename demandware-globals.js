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

/**
 * Walk the given directory synchronously and return the files
 *
 * @param  {String} dir      The directory to walk
 * @param  {Array}  filelist Leave empty on first call, used for recursion
 *
 * @return {Array}          The files (full paths)
 */
var walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = walkSync(dir + '/' + file, filelist);
    }
    else {
      filelist.push(dir + '/' + file);
    }
  });
  return filelist;
};

var path = require('path');
// walk the dw/* directory and add create dw.* globals by requiring the found stuff
walkSync(__dirname).forEach(function(file){
    var classPath = path.relative(__dirname,file).replace('.js','');
    var pathArray = classPath.split(path.sep);
    if(pathArray.length == 3 && pathArray[0] == 'dw'){
        var obj = global;
        pathArray.forEach(function(pathElem){
            //console.log(pathElem);
            if(!obj[pathElem]){
                obj[pathElem] = {};
            }
            obj = obj[pathElem];
        });
        try{
            global[pathArray[0]][pathArray[1]][pathArray[2]] = require("./"+classPath);
        }catch(e){
            console.log("Could not require "+classPath+e);
        }
    }
});

global.empty = function(obj) {
    if (obj === null || obj === undefined || obj === '' || (typeof (obj) !== 'function' && obj.length !== undefined && obj.length === 0)) {
        return true;
    } else {
        return false;
    }
};

global.Fault = function() {};

global.request = new dw.system.Request();
global.response = new dw.system.Response();
global.session = new dw.system.Session();

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

global.String.prototype.equals = function(object) {
    return (typeof object === 'string') && object === this.valueOf();
};

global.PIPELET_NEXT = 1;
global.PIPELET_ERROR = 0;

// add root as module lookup location so that require("dw/*") will work
require('app-module-path').addPath(__dirname + '/');
