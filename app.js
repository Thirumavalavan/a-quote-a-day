var express = require('express');
var app =express();
app.get('/',function(req,res){
res.sendFile(__dirname+'/index.html')
});
app.get('/query', function(req,res){
res.json(["iphone","samsung","LG","sony"]);
})
app.listen(9090, function(){
console.log("Server started @ 9090");
});