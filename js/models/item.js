app.models.Item = Backbone.Model.extend({
  initialize: function (option){
    this.url = app.api.AntBucket.items(option.bucket_list_id); 
    this.on("invalid", function(model, error){
      console.log(error);
    });  
  }, 
  defaults: { 
    name: '', 
    created_at: ''
  },  
  validate: function(attributes){
    if(attributes.name == ''){
      return 'A name for your Item is required!';   
    }
  }
});
