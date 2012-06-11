define([
  'jQuery',
  'Underscore',
  'Backbone'
], function($, _, Backbone){

    var resultsItemView = Backbone.View.extend({
      tagName:"li",
      initialize:function (options) {
          this.model.bind("change", this.render, this);
          this.model.bind("destroy", this.close, this);
          this.template = options.template;
      },

      render:function () {
          $(this.el).html(_.template(this.template, this.model.toJSON()));
          return this;
      }
    });

    return resultsItemView;
});