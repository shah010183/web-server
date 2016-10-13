var express = require('express');
var app = express(); //express app
var port = 3000;

var middleware = {
  requireAuthentication: function(req, res, next) {
    console.log('private route hit!');
    next();
  },
  logger: function(req, res, next) {
    console.log ('Request ('+ new Date().toString()+'): ' + req.method + ' from url: ' + req.originalUrl);
    next();
  }
};

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
