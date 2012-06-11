define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/results/item'
], function($, _, Backbone, ItemView){

  var resultsListView = Backbone.View.extend({
    tagName:'ul',
    className:'nav nav-list',
    model: [],
    initialize:function () {
        
        
    },

    render:function () {
        $(this.el).empty();
        _.each(this.model.models, function (item) {
            $(this.el).append(new ItemView({model:item}).render().el);
        }, this);
        return this;
    },

    setModel: function(model){
      this.model = model;
      var self = this;
      this.model.bind("reset", this.render, this);
      this.model.bind("add", function (item) {
          $(self.el).append(ItemView({model:item}).render().el);
      });
    }
  });

  return resultsListView;
});