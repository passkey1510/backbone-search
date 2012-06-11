define([
  'collections/videos',
  'collections/tweets',
  'text!templates/results/videoItem.html',
  'text!templates/results/tweetItem.html'
], function(VideoList, TweetList, videoItemTemplate, tweetItemTemplate){
  var ResultsFactory = {
  	createSearchResults: function(service) {
  	  switch (service) {
        case "YouTube":
          return {
            collection: new VideoList(),
            template: videoItemTemplate
          };
          // this.searchResultsView.setModel(searchResults);
          // searchResults.findByName(data.key);
          // break;
        case "Twitter":
          // var searchResults = 
          // this.searchResultsView.setModel(searchResults);
          // searchResults.findByName(data.key);
          // break;
          return {
            collection: new TweetList(),
            template: tweetItemTemplate
          }
      }
  	}
  };

  return ResultsFactory;
});