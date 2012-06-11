define([
  'jQuery',
  'Underscore',
  'Backbone',
  'models/tweet'
], function($, _, Backbone, tweetModel){
  var videosCollection = Backbone.Collection.extend({
    model: tweetModel,
    url : "http://search.twitter.com/search.json",
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
          // v : "2",
          // alt : "jsonc",
          q : key
        },
        success : function(data) {
          console.log("search success: " + data.results.length);
          self.reset(data.results);
        }

      });
    }

  });

  return videosCollection;
});