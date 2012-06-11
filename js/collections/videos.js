define([
  'jQuery',
  'Underscore',
  'Backbone',
  'models/video'
], function($, _, Backbone, videoModel){
  var videosCollection = Backbone.Collection.extend({
    url : "https://gdata.youtube.com/feeds/api/videos/",
    parse : function(response) {
      console.log('parsing data');
      return response.data.items;
    },
    findByKeyWord : function(key) {
      console.log('findByName: ' + key);
      var self = this;
      $.ajax({
        url : self.url,
        dataType : "jsonp",
        data: {
          v : "2",
          alt : "jsonc",
          q : key
        },
        success : function(data) {
          console.log("search success: " + data.data.items.length);
          self.reset(data.data.items);
        }

      });
    }

  });

  return videosCollection;
});