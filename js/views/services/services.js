define([
  'jQuery',
  'Underscore',
  'Backbone',
  'text!templates/services/services.html'
], function($, _, Backbone, ServicesTemplate){
  var serviceListView = Backbone.View.extend({
  	initialize: function(){
  		// this.collections = new ServicesCollection();
  	},
  	render: function(){
  		var data = {
  			services: this.collection.models
  		}
  		$(this.el).html(_.template(ServicesTemplate, data));
        return this;
  	}
  }); 
  return serviceListView;
});
