const express = require('express'); // import express
const app = express(); // initialize express
const fakeWeatherData = require('./data.js'); // import fake data
// GET route
app.get('/', function(req, res) {
  res.send(fakeWeatherData[0]);
})



// Listen on port 3000
app.listen(4000, function() {
  console.log('listening on port 3000...');
})
