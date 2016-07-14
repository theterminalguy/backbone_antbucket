app.views.Menu = Backbone.View.extend({
  initialize: function(){
    this.render();
  },
  template: _.template($('#tpl_menu').html()), 
  render: function(){
    // this.$el.empty(); 
    this.$el.html(this.template());
    return this; 
  }
});

app.menu = new app.views.Menu(); 
$('#menu').html(app.menu.el);



