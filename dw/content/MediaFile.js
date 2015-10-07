var MediaFile = function(){};

MediaFile.prototype.getURL = function() {
	return '/on/demandware.static/relative/pim-static/image/url';
};

MediaFile.prototype.getViewType = function(){};
MediaFile.prototype.getTitle = function() {
	return 'Image Title';
};

MediaFile.prototype.getAlt = function() {
	return 'Image Alt';
};

MediaFile.prototype.getUrl = function(){};

MediaFile.prototype.getImageURL = function(transform) {
	if (!transform || !transform.length) {
		return this.getURL();
	}

	return 'transformed/image/url';
};

MediaFile.prototype.getAbsURL = function() {
	return 'http://domain/on/demandware.static/absolute/pim-static/image/url';
};

MediaFile.prototype.getAbsImageURL = function(){};
MediaFile.prototype.getHttpURL = function() {
	return 'http://domain/on/demandware.static/absolute/pim-static/http/image/url';
};

MediaFile.prototype.getHttpImageURL = function(){};
MediaFile.prototype.getHttpsURL = function() {
	return 'https://domain/on/demandware.static/absolute/pim-static/https/image/url';
};

MediaFile.prototype.getHttpsImageURL = function(){};
MediaFile.prototype.URL=null;
MediaFile.prototype.viewType=null;
MediaFile.prototype.title=null;
MediaFile.prototype.alt=null;
MediaFile.prototype.url=null;
MediaFile.prototype.imageURL=null;
MediaFile.prototype.absURL=null;
MediaFile.prototype.absImageURL=null;
MediaFile.prototype.httpURL=null;
MediaFile.prototype.httpImageURL=null;
MediaFile.prototype.httpsURL=null;
MediaFile.prototype.httpsImageURL=null;

module.exports = MediaFile;