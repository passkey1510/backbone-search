define([
  'Underscore',
  'Backbone'
], function(_, Backbone) {
  var video = Backbone.Model.extend({
    urlRoot : "https://gdata.youtube.com/feeds/api/videos/",
	parse : function(response) {
		return response.data;
	}

  });
  return video;

});