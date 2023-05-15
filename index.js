const express = require('express'); // import express
const app = express(); // initialize express

// GET route
app.get('/', function(req, res) {
  res.send({'hello': 'world'})
})

// Listen on port 3000
app.listen(3000, function() {
  console.log('listening on port 3000...');
})
