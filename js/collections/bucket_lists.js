app.collections.BucketLists = Backbone.Collection.extend({
  model: app.models.BucketList,
  url: app.api.AntBucket.bucket_lists,
  initialize: function(){}, 
  parse: function(response){
    this.total_records = response.total_records;
    this.page = response.page; 
    return response.bucket_list
  }
});
