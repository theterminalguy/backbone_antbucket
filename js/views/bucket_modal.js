app.views.BucketModal = Backbone.Modal.extend({
  initialize: function(options = {}){
    if(!_.isEmpty(options)){
      this.model = options.model;
      this.render();
      this.$('#txt_bucket_name').val(this.model.get('name'));
    }else {
      this.render();  
    }
  },
  template: '#modal-template',
  cancelEl: '#btn_close',
  events: {
    'click #btn_save': 'save'
  }, 
  save: function(){
    if(!_.isEmpty(this.model)){
      var self = this; 
      var bucket_name = this.$('#txt_bucket_name').val();
      this.model.set({name: bucket_name});
        this.model.url += '/' + this.model.get('id');
          this.model.save(this.model.attributes, {
            success: function(model, response, options){
              toastr.success('Updated successfully', 'Bucket List');
              app.bucket_lists.add(model);
              self.triggerCancel();
            },
            error: function(){
              console.log('Error =>', response);
            }
          }); 

    } else {
        var self = this; 
        var bucket_name = this.$('#txt_bucket_name').val();
        var new_bucket = new app.models.BucketList({name: bucket_name}); 
            new_bucket.save(new_bucket.attributes, {
              success: function(model, response, options){
                toastr.success('Created successfully', 'Bucket List');
                app.bucket_lists.add(model);
                self.triggerCancel();
              },
              error: function(){
                console.log('Error =>', response);
              }
            }); 
    }
  }
});
