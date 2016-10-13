var express = require('express');
var app = express(); //express app
var port = 3000;

app.get('/',function(req, res){
  res.send('Hello Express!');
});

app.get('/about',function(req, res){
  res.send('About us');
});

console.log("Web server address: " + __dirname);


app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
  console.log('Express server started (port : '+ port +')...');
});
