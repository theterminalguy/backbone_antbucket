app.api.AntBucket = (function(){
  var host = 'https://antbucket.herokuapp.com/api/v1/';
      endpoints = {
        user: {
          register: host + 'users',
          login: host + 'auth/login',
          logout: host + 'auth/logout'
        },
        bucket_lists: host + 'bucket_lists',
        items: function(id){
          return host + 'bucket_lists/' + id + '/items'
        }
      };

  return endpoints;

}());
