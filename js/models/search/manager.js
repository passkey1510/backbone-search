define([
  'jQuery',
  'Underscore',
  'Backbone',
  'collections/services',
  'views/search/search',
  'views/services/services',
  'views/results/list',
  'utils/resultsFactory'
], function($, _, Backbone, ServiceCollection, SearchView, ServicesView, ResultsListView, ResultsFactory){
  var SearchManager = Backbone.Model.extend({

  	initialize: function(options) {
  		this.serviceCollection = new ServiceCollection(options.services);
  		var that = this;
  		this.searchView = new SearchView();
  		this.servicesView = new ServicesView({
  			collection: this.serviceCollection
  		});
  		this.searchView.bind('search', this.search, this);
  		this.searchResultsView = new ResultsListView();
  	},
  	getSearchView: function() {
  		return this.searchView;
  	},
  	getServicesView: function() {
  		return this.servicesView;
  	},
  	getSearchResultsView: function() {
  		return this.searchResultsView;
  	},
  	//Handle search action based on current service
    search: function(data) {
      var currentService = $('select', this.servicesView.el).val();
      console.log("search entered on service " + currentService + " - " + data.key);
      var searchResults = ResultsFactory.createSearchResults(currentService);
      this.searchResultsView.setModel(searchResults.collection);
      this.searchResultsView.setItemTemplate(searchResults.template);
      searchResults.collection.findByKeyWord(data.key);
    },
  });
  return SearchManager;
});
