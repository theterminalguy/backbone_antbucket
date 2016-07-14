app.collections.Users = Backbone.Collection.extend({
  model: app.models.User,
  url: app.api.AntBucket.user.register,
  initialize: function(){}
});
