// Filename: router.js
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/home/main',
  'models/search/manager'
], function($, _, Backbone, mainHomeView, SearchManager){
  var AppRouter = Backbone.Router.extend({
    routes: {
      "": "home",
      "videos/:id" : "videoDetails",
      // Default
      '*actions': 'defaultAction'
    },
    initialize: function () {
        this.searchManager = new SearchManager({
          services: [{name: "YouTube", value: "YouTube"}, {name: "Twitter", value: "Twitter"}]
        });
        $('.search').html(this.searchManager.getSearchView().render().el);
        $('.services').html(this.searchManager.getServicesView().render().el);
        // Create an empty results view
        $('#results').html(this.searchManager.getSearchResultsView().render().el);
    },
    
    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        // if (!this.homeView) {
        //     this.homeView = new HomeView();
        //     this.homeView.render();
        // } else {
        //     this.homeView.delegateEvents(); // delegate events when the view is recycled
        // }
        // $("#content").html(this.homeView.el);
//        this.headerView.select('home-menu');
      mainHomeView.render();
    },
    videoDetails: function(id) {
      var video;
      if (this.searchView.searchResults.length) {
        video = this.searchView.searchResults.get(id);
        if (video) {
//          this.videoView = new VideoView({model:video});
//        $('#content').html(self.videoView.render().el); 
          this.displayVideoDetails(video);
        }
      }
      if (!video) {
        video = new Video({id : id});
        var self = this;
        video.fetch({
          data: {
            v : "2",
            alt : "jsonc"
          },
          success: function(data) {
//            self.videoView = new VideoView({model:self.video});
//            $('#content').html(self.videoView.render().el); 
            self.displayVideoDetails(video);
          }
        });
      }
//      if (video) {
//        this.displayVideoDetails(video);
//      }
    },
    displayVideoDetails: function(video) {
      console.log(video.id + ' - ' + video.get("title"));
      this.playerView.play(video.id);
    },
    defaultAction: function(actions){
      // We have no matching route, lets display the home page 
      mainHomeView.render(); 
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});