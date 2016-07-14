app.views.ItemsView = Backbone.View.extend({
    tagName: 'tbody',
    // el: $('tbody'),
    initialize: function(options){
      this.render(); 
      this.collection.on('add', this.addOne, this);
    },
    render: function(){
      this.addAll();
      return this; 
    },
    addAll: function(){
      this.$el.empty();
      this.collection.forEach(this.addOne, this); 
    },
    addOne: function(model){
      var view = new app.views.ItemView({model: model}); 
      this.$el.append(view.el); 
    }
});

