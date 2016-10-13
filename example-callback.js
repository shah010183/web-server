// http://api.openweathermap.org/data/2.5/weather?appid=0428bfc8554c659470df9daa5e4938d3&q=Fremont&units=imperial

// var request = require ('request');
// var url = 'http://api.openweathermap.org/data/2.5/weather?appid=0428bfc8554c659470df9daa5e4938d3&q=Fremont&units=imperial';

//(for weather.js - new lecture) -- start
var weather = require('./weather.js');
weather(function(currentweather){
  console.log(currentweather);
});
//(for weather.js - new lecture) -- end

// request({
//   url: url,
//   json: true
// }, function(error, response, body) {
//   if (error) {
//     console.log('Unable to fetch weather.');
//   } else {
//     //console.log(JSON.stringify(body,null,4));
//     console.log ("typeof body : "+ typeof body);
//     var temp = getTemprature(body);
//     console.log ("Today's Fremont temp: " + temp);
//   }
// });
//
// function getTemprature (bodyJSON) {
//     //var bodyJSONObj = JSON.parse(bodyJSON);
//     return bodyJSON.main.temp;
// }
