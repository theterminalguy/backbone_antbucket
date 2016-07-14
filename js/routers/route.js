app.Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "login": "login",
    "logout": "logout",
    "register": "register",
    "dashboard": "userDashboard",
    "bucket/:id/show": "showBucketItems",
    "bucket/:id/edit": "editBucket",
    "bucket/:id/delete": "deleteBucket"
  },
  index: function(){
    console.log('hello');
  },
  login: function(){ 
    if(Check.authenticated()){ 
      Check.redirect_to_dashboard(); 
    }else { 
      new app.views.LoginView(); 
    }
  }, 
  logout: function(){
    app.db.removeAll();
    Check.redirect_to_login();
  },
  register: function(){ 
    if(Check.authenticated()){ 
      Check.redirect_to_dashboard(); 
    }
    else { 
      new app.views.RegisterView();
    }
  },
  userDashboard: function(){
    if(!Check.authenticated()){ 
      Check.redirect_to_login();
    }
    else{ 
      new app.views.DashboardView();
    }
  },
  showBucketItems: function(id){
    var item = new app.models.Item({bucket_list_id: id}); 
    app.items = new app.collections.Items({ 
      model: item, bucket_list_id: id 
    });

    app.items.fetch({
      success: function(items, response){
        toastr.success('Fetched successfully', 'Your Items');
        view = new app.views.ItemsView({collection: items });
          app.items = items ;
          console.log('giggles');
          $('#todo').empty(); 
          $('#tpl_item_board').append(view.el);
      }, 
      error: function(items, response){
        console.log('Error =>', response);
      }
    });
  },
  editBucket: function(id){
    var bucket = app.bucket_lists.get(id);
    var modalView = new app.views.BucketModal({model: bucket});
        $('.modal').html(modalView.el);

  },
  deleteBucket: function(id){
    var bucket = app.bucket_lists.get(id);
    bucket.url += '/' + bucket.get('id');
    bucket.destroy({
      success: function(model, response){
        Check.redirect_to_dashboard(); 
        app.bucket_lists.remove(model)
      }, 
      destroy: function(model, response){
        console.log('Error=>', response);
      },
      wait: true   
    });
    
  }
});

app.router = new app.Router(); 
