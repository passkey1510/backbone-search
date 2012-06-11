define([
  'jQuery',
  'Underscore',
  'Backbone',
  'models/service'
], function($, _, Backbone, serviceModel){
  var servicesCollection = Backbone.Collection.extend({
    model: serviceModel,
    initialize: function(){

    }

  });

  return servicesCollection;
});