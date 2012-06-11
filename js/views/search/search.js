define([
  'jQuery',
  'Underscore',
  'Backbone',
  'text!templates/search/search.html',
], function($, _, Backbone, searchTemplate){

  var searchView = Backbone.View.extend({

      initialize: function () {
          // this.searchResults = new Vid;
      },

      render: function () {
          $(this.el).html(searchTemplate);
          // $('#results').append(this.searchresultsView.render().el);
          return this;
      },

      events: {
          "keypress .search-query": "onkeypress"
      },

      search: function () {
          var key = $('#keyword').val();
          // Delegates this action to parent view or router
          this.trigger('search', {key: key});
      },

      onkeypress: function (event) {
      	if (event.keyCode != 13) return;
      	this.search();
      },
  });

  return searchView;
});