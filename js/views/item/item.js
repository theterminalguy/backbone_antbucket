app.views.ItemView = Backbone.View.extend({
  tagName: 'tr',  
  initialize: function(){
    this.render();
  },
  template: _.template($('#tpl_item').html()), 
  render: function(){
    this.$el.empty();
    this.$el.html(this.template(this.model.attributes));
    return this; 
  }
});
