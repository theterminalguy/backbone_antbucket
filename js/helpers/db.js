app.storage.session = (function(){
 return $.initNamespaceStorage('ant_bucket_app_v1.00').sessionStorage
}());

app.db = app.storage.session 
