  app.collections.Items = Backbone.Collection.extend({
    model: app.models.Item, 
    initialize: function(options){
      this.url = app.api.AntBucket.items(options.bucket_list_id); 
    }, 
    parse: function(response){
      return response.items 
    }
  });
