var express = require('express');
const util = require('util')
var app = express(); //express app
var port = 3000;

var middleware = require('./middleware.js');
//moved all middleware code to this file

// inspect middleware
console.log("middleware: " + util.inspect(middleware, false, null));

// for all pages
// app.use(middleware.requireAuthentication);
app.use(middleware.logger);
// for specific pages add it as a second arguement to app.get

app.get('/about',middleware.requireAuthentication, function(req, res){
  res.send('About us');
});

console.log("Web server address: " + __dirname);


app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
  console.log('Express server started (port : '+ port +')...!');
});
