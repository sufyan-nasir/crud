var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send("Main Page");
})


app.get('/hello',function(req,res){
    res.send("Hello World!");
    console.log('Hello World');
})

app.listen(5000, function(){
    console.log(`App running on port ${5000}`);
})