var fs = require('fs');
var CustomObjectMgr = function(){};

CustomObjectMgr.removea = function(){};
CustomObjectMgr.describe = function(){};
CustomObjectMgr.createCustomObject = function(){};
CustomObjectMgr.getCustomObject = function(type, id){
	//console.log('CO query for '+type+' with ID '+id);

	var CoClass = require('./CustomObject'); 
	var customObject = new CoClass();

	// var tmp = fs.readFileSync('working/'+type+'_CustomObject.xml',{encoding:'utf8'}).split('object-id="'+id+'">\n');
	// if(tmp.length > 1){
	// 	tmp.split('</custom-object>')[0].split('\n').forEach(function(line){
	// 		console.log(line);
	// 	});
	// }// else not found

	if (type == "WebserviceCredentials") {
		customObject.custom = new Object();
		customObject.custom.url = "http://dummy.com";
		customObject.custom.credentialsType = "DUMMY_VALUES";
		customObject.custom.password = "1234567";
	}
	if (type == "WebserviceConfiguration") {
		customObject.custom = new Object();
		customObject.custom.targetEnvironment = "Test-Test";
		customObject.custom.timeout = 1000;
		customObject.custom.serviceEnableLocking = false;
		customObject.custom.logSoap = true;
		customObject.custom.logStatus = true;
	}
	return customObject;

};
CustomObjectMgr.getAllCustomObjects = function(){};
CustomObjectMgr.queryCustomObjects = function(){};
CustomObjectMgr.prototype.customObject=null;
CustomObjectMgr.prototype.allCustomObjects=null;

module.exports = CustomObjectMgr;