var exhibits = require('./models/exhibits.js');
var news = require('./models/news.js');
var personnel = require('./models/personnel.js');
var resources = require('./models/resources.js');
var shows = require('./models/shows.js');
var mongoose = require('mongoose');
var DB_URL = process.env.MONGOLAB_URI || "mongodb://localhost:27017/planetarium";
mongoose.connect(DB_URL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function(callback){
    console.log('database connection successful');
});

var clearSky = { title: "Clear Sky Forecast", author: "cleardarksky.com", fileLink: "http://cleardarksky.com/c/RbsnPntNCkey.html", order: 0, description:"Check out which days will have the best weather for astronomical viewing. Click for our detailed astronomer's weather forecast."}

var newResource = new resources({clearSky});
newResource.save(function(err, doc) {
    if (err) console.error(err);
    console.log("New resource saved to database");
});