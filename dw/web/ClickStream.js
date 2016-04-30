var ClickStream = function() {};

ClickStream.prototype.getFirst = function() {};
ClickStream.prototype.getLast = function() {
    return ClickStream.prototype.last;
};
ClickStream.prototype.getClicks = function() {};
ClickStream.prototype.isPartial = function() {};
ClickStream.prototype.first = null;
ClickStream.prototype.last = new (require('../web/ClickStreamEntry'))();
ClickStream.prototype.clicks = null;

module.exports = ClickStream;
