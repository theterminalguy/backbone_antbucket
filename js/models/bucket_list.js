
app.models.BucketList = Backbone.Model.extend({
  url: app.api.AntBucket.bucket_lists, 
  initialize: function (){
    this.on('invalid', function(model, error){
      console.log(error);
    });  
  }, 
  defaults: { id: null, name: ''},  
  validate: function(attributes){
    if(Check.isBlank(attributes.name)){
      return 'A name for your Bucketlist is required!';   
    }
  }
});
