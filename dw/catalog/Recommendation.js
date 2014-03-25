var _super = require('../object/ExtensibleObject');

var Recommendation = function(){};

Recommendation.prototype = new _super();

Recommendation.prototype.getName = function(){};
Recommendation.prototype.getImage = function(){};
Recommendation.prototype.getCalloutMsg = function(){};
Recommendation.prototype.getCatalog = function(){};
Recommendation.prototype.getShortDescription = function(){};
Recommendation.prototype.getLongDescription = function(){};
Recommendation.prototype.getRecommendedItem = function(){};
Recommendation.prototype.getRecommendedItemID = function(){};
Recommendation.prototype.getSourceItem = function(){};
Recommendation.prototype.getSourceItemID = function(){};
Recommendation.prototype.getRecommendationType = function(){};
Recommendation.prototype.name=null;
Recommendation.prototype.image=null;
Recommendation.prototype.calloutMsg=null;
Recommendation.prototype.catalog=null;
Recommendation.prototype.shortDescription=null;
Recommendation.prototype.longDescription=null;
Recommendation.prototype.recommendedItem=null;
Recommendation.prototype.recommendedItemID=null;
Recommendation.prototype.sourceItem=null;
Recommendation.prototype.sourceItemID=null;
Recommendation.prototype.recommendationType=null;

module.exports = Recommendation;