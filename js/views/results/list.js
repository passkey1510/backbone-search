define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/results/item'
], function($, _, Backbone, ItemView){

  var resultsListView = Backbone.View.extend({
    tagName:'ul',
    className:'nav nav-list',

    initialize:function () {
        var self = this;
        this.model.bind("reset", this.render, this);
        this.model.bind("add", function (item) {
            $(self.el).append(ItemView({model:item}).render().el);
        });
    },

    render:function () {
        $(this.el).empty();
        _.each(this.model.models, function (item) {
            $(this.el).append(new ItemView({model:item}).render().el);
        }, this);
        return this;
    }
  });

  return resultsListView;
});