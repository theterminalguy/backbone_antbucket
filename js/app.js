var app = (function() {
    var interface = {
        views: {},
        models: {},
        collections: {},
        api: {},
        storage: {}, 
        init: function() { 
            Backbone.history.start({}); 
            return this; 
        },
    };
 
    return interface;
 
})();

$(function(){ 
    app.init(); 
    Backbone.$.ajaxSetup({ headers: { 'token' : app.db.get('user.token') }});
});
