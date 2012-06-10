// Filename: router.js
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/home/main',
  'views/search/search',
], function($, _, Backbone, mainHomeView, SearchView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      "": "home",
      "videos/:id" : "videoDetails",
      // Default
      '*actions': 'defaultAction'
    },
    initialize: function () {
        this.searchView = new SearchView();
        $('.search').html(this.searchView.render().el);
        // $('.player').html(this.playerView.render().el);
        // Close the search dropdown on click anywhere in the UI
        $('body').click(function () {
            $('.dropdown').removeClass("open");
        });
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