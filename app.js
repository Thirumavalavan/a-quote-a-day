var express = require('express');
var app =express();
app.get('/',function(req,res){
res.sendFile(__dirname+'/index.html')
});
app.get('/query', function(req,res){
res.json(["iphone","samsung","LG","sony"]);
})
app.listen(process.env.PORT || 8080, function(){
console.log("Server started @ 8080");
});