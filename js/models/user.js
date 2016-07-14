app.models.User = Backbone.Model.extend({
  url: app.api.AntBucket.user.register, 
  initialize: function (){
  }, 
  defaults: { 
    email: "", 
    password: "" 
  },  
  validate: function(attrs){
    var errors = []; 

    if(Check.isBlank(attrs.password)){ errors.push("Password can't be blank");}
    if(Check.isTextShort(attrs.password, 7)){ 
      errors.push('Password is too short! Minimum Length is 7'); 
    }
    if(Check.isBlank(attrs.email)){ errors.push("Emal can't be blank");}
    if(Check.notEmail(attrs.email)){ errors.push('Enter a valid email address'); }

    if(errors.length > 0 ){return errors;}
  }
});

