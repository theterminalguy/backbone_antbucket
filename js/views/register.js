app.views.RegisterView = Backbone.View.extend({  
  initialize: function(){
    this.render();
  },
  el: $('#app'),
  template: _.template($('#tpl_regiser').html()), 
  render: function(){
    this.$el.empty();
    this.$el.html(this.template());
    return this; 
  },
  events: {
    'click #btn_create': 'registerUser'
  },
  registerUser: function(e){
    e.preventDefault();
    var new_session = "",
    email = this.$("#txt_email").val(),
    password1 = this.$("#txt_password1").val(),
    password2 = this.$("#txt_password2").val();
    if(password1 != password2){ 
      toastr.error("The password did not match");
      return false; 
    }
    new_session = new app.models.User({email: email, password: password1});

    new_session.save(new_session.attributes, {
      success: function(model, response){
      },
      error: function(model, response){
      } 
    });

    if(new_session.validationError){
      errors = new_session.validationError;
      errors.forEach(function(error){ toastr.error(error, 'Error');});
    }
  }
});
