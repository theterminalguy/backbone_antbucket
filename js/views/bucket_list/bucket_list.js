app.views.BucketListView = Backbone.View.extend({
  tagName: 'tr',  
  initialize: function(){
    this.render();
  },
  template: _.template($('#bucket_item').html()), 
  render: function(){
    this.$el.empty();
    this.$el.html(this.template(this.model.attributes));
    return this; 
  }
});
