var Check = {
  isBlank: function (str){
  var blank_filter = /^\s+$/;
    if (_.isEmpty(str) || blank_filter.test(str) == true){ return  true; }
    else { return false; }
  },
  notEmail: function (str){
    var email_filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!email_filter.test(str)) { return true; } 
    else { return false; }
  },
  isTextShort: function(str, len = 7){
    if(str.length < len){ return true; }
    else { return false; }
  }, 
  authenticated: function(){
    if(app.db.get('user') == undefined){
      return false; 
    }

    if(Boolean(app.db.get('user.token')) && Boolean(app.db.get('user.token'))) {
      return true; 
    }
  }, 
  redirect_to_login: function(){
    app.router.navigate('login', {trigger: true});
  }, 
  redirect_to_dashboard: function(){
    app.router.navigate('dashboard', {trigger: true});
  }
};

toastr.options.closeButton = true;
