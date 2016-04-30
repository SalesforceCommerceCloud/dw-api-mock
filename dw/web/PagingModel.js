var PagingModel = function() {};

PagingModel.prototype.isEmpty = function() {};
PagingModel.prototype.getCount = function() {};
PagingModel.prototype.getEnd = function() {};
PagingModel.prototype.getPageElements = function() {
    return PagingModel.prototype.pageElements;
};
PagingModel.prototype.getStart = function() {};
PagingModel.prototype.setStart = function() {};
PagingModel.prototype.getPageSize = function() {};
PagingModel.prototype.setPageSize = function() {};
PagingModel.prototype.getCurrentPage = function() {};
PagingModel.prototype.getMaxPage = function() {};
PagingModel.prototype.getPageCount = function() {};
PagingModel.prototype.appendPaging = function() {};
PagingModel.appendPageSize = function() {};
PagingModel.prototype.count = null;
PagingModel.prototype.end = null;
PagingModel.prototype.pageElements = new (require('../util/Iterator'))();;
PagingModel.prototype.start = null;
PagingModel.prototype.pageSize = null;
PagingModel.prototype.currentPage = null;
PagingModel.prototype.maxPage = null;
PagingModel.prototype.pageCount = null;

module.exports = PagingModel;
