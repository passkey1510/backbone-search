define([
  'collections/videos',
  'collections/tweets'
], function(VideoList, TweetList){
  var ResultsFactory = {
  	createSearchResults: function(service) {
  	  switch (service) {
        case "YouTube":
          return new VideoList();
          // this.searchResultsView.setModel(searchResults);
          // searchResults.findByName(data.key);
          // break;
        case "Twitter":
          // var searchResults = 
          // this.searchResultsView.setModel(searchResults);
          // searchResults.findByName(data.key);
          // break;
          return new TweetList();
      }
  	}
  };

  return ResultsFactory;
});