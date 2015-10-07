var ProductVariationAttributeValue = function(){};

ProductVariationAttributeValue.prototype.equals = function(){};
ProductVariationAttributeValue.prototype.hashCode = function(){};
ProductVariationAttributeValue.prototype.getValue = function(){};
ProductVariationAttributeValue.prototype.getID = function(){};
ProductVariationAttributeValue.prototype.getDescription = function(){};
ProductVariationAttributeValue.prototype.__impl = function(){};

ProductVariationAttributeValue.prototype.getImage = function(){
	return new require('../content/MediaFile');
};

ProductVariationAttributeValue.prototype.getImages = function(){};

ProductVariationAttributeValue.prototype.getDisplayValue = function(){};

ProductVariationAttributeValue.prototype.value=null;
ProductVariationAttributeValue.prototype.ID=null;
ProductVariationAttributeValue.prototype.description=null;
ProductVariationAttributeValue.prototype.image=null;
ProductVariationAttributeValue.prototype.images=null;
ProductVariationAttributeValue.prototype.displayValue=null;

module.exports = ProductVariationAttributeValue;