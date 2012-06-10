define([
  'jQuery',
  'Underscore',
  'Backbone',
  'text!templates/results/item.html',
  'models/video'
], function($, _, Backbone, resultsItemTemplate, videoModel){

    var resultsItemView = Backbone.View.extend({
      tagName:"li",
      model: videoModel,
      initialize:function () {
          this.model.bind("change", this.render, this);
          this.model.bind("destroy", this.close, this);
      },

      render:function () {
          $(this.el).html(_.template(resultsItemTemplate, this.model.toJSON()));
          return this;
      }
    });

    return resultsItemView;
});