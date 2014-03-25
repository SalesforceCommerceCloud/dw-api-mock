var ShipmentShippingModel = function(){};

ShipmentShippingModel.prototype.getApplicableShippingMethods = function(){};
ShipmentShippingModel.prototype.getInapplicableShippingMethods = function(){};
ShipmentShippingModel.prototype.getShippingCost = function(){};
ShipmentShippingModel.prototype.applicableShippingMethods=null;
ShipmentShippingModel.prototype.inapplicableShippingMethods=null;
ShipmentShippingModel.prototype.shippingCost=null;

module.exports = ShipmentShippingModel;