app.views.DashboardView = Backbone.View.extend({
  initialize: function(){
    this.fetchBucket();
    this.render();
  },
  el: $('#app'),
  template: _.template($('#tpl_dashboard').html()),
  render: function(){
    this.$el.empty();
    this.$el.html(this.template());
    return this;
  },
  events: {
    'click #btn_add_bucket': 'addBucket'
  },
  fetchBucket: function(){
    var bucket_list = new app.models.BucketList(); 
    app.bucket_lists = new app.collections.BucketLists({ model: bucket_list});
        app.bucket_lists.fetch({
          success: function(bucket_lists, response){
            toastr.success('Fetched successfully', 'Bucket List');
            view = new app.views.BucketListsView({
              collection: bucket_lists
            });
            app.bucket_lists = bucket_lists
            $('#todo').append(view.el);
          }, 
          error: function(bucket_lists, response){
              console.log('Error =>', response);
          }
        });
  }, 
  addBucket: function(){    
    var modalView = new app.views.BucketModal();
        $('.modal').html(modalView.el);
  }
});

