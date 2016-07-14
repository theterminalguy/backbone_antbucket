app.views.LoginView = Backbone.View.extend({  
  initialize: function(){
    this.render();
  },
  el: $('#app'),
  template: _.template($('#tpl_login').html()), 
  render: function(){
    this.$el.empty();
    this.$el.html(this.template());
    return this; 
  }, 
  events: {
    'click #btn_login': 'loginUser'
  }, 
  loginUser: function(e){
    e.preventDefault(); 
    var new_session = "",
    email = this.$("#txt_email").val(),
    password = this.$("#txt_password").val(); 
    new_session = new app.models.User({email: email, password: password});
    new_session.url = app.api.AntBucket.user.login

    if(Check.authenticated()){
      toastr.success('Taking you to the dashboard', 'Success');
      app.router.navigate('dashboard', {trigger: true});
      return true;
    }else {
      new_session.save(new_session.attributes, {
      success: function(model, response){
        app.db.set('user.email', response.user_email); 
        app.db.set('user.token', response.token); 
        app.router.navigate('dashboard', {trigger: true});
        toastr.success('Taking you to the dashboard', 'Success');
      },
      error: function(model, response){
        data = JSON.parse(response.responseText); 
        toastr.error(data.errors, 'Error'); 
      } 
      });
    }

    if(new_session.validationError){
      errors = new_session.validationError;
      errors.forEach(function(error){ toastr.error(error, 'Error');});
    }
  }
});
