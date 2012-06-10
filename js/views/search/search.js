define([
  'jQuery',
  'Underscore',
  'Backbone',
  'collections/videos',
  'text!templates/search/search.html',
  'views/results/list'
  
], function($, _, Backbone, VideoList, searchTemplate, ResultsListView){

  var searchView = Backbone.View.extend({

      initialize: function () {
          this.searchResults = new VideoList();
          this.searchresultsView = new ResultsListView({model: this.searchResults});
          // results.model = videoList;
      },

      render: function () {
          $(this.el).html(searchTemplate);
          $('#results').append(this.searchresultsView.render().el);
          return this;
      },

      events: {
          "keypress .search-query": "onkeypress"
      },

      search: function () {
          var key = $('#keyword').val();
          console.log('search ' + key);
          this.searchResults.findByName(key);
  //        setTimeout(function () {
  //            $('.dropdown').addClass('open');
  //        });
      },

      onkeypress: function (event) {
      	if (event.keyCode != 13) return;
      	this.search();
      },

      select: function(menuItem) {
          $('.nav li').removeClass('active');
          $('.' + menuItem).addClass('active');
      }

  });

  return searchView;
});