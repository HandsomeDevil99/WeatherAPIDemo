const express = require('express'); // import express
const app = express(); // initialize express
//GET route
app.get('/weather',function(req,res){
//store query string parameter in CityName variable
//res.send("Hello world");
let cityName = req.query.city.toLowerCase();
for(let i =0; i<fakeWeatherData.length;i++){


  //if no city parameter exists
  if(!req.query.city){
    res.send({"status":"error","message":"This city does not exist"});
   // res.send
  }
  else if(cityName == fakeWeatherData[i].city.toLowerCase()){
    res.send(fakeWeatherData[i]);
  }
}
});
// Listen on port 3000
app.listen(3000, function() {
  console.log('listening on port 3000...');
})
