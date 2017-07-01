var exhibits = require('./models/exhibits.js');
var news = require('./models/news.js');
var personnel = require('./models/personnel.js');
var resources = require('./models/resources.js');
var shows = require('./models/shows.js');
var texts = require('./models/text.js');
var mongoose = require('mongoose');
var DB_URL = process.env.MONGOLAB_URI || "mongodb://localhost:27017/planetarium";
mongoose.connect(DB_URL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var count = 0;

db.once("open", function(callback){
    console.log('database connection successful');
    
    exhibits.findOne({title: "Magnets"}, function(err, result){
        if (err) console.error(err);
        result.imageText = "magnetic field";
        result.save(function(err) {
            if(err) console.error(err);
            console.log("saved imageText");
            count += 1;
            if (count === 8) {
                mongoose.disconnect();
            }
        });
    });
    
    exhibits.findOne({title: "Building Robots"}, function(err, result){
        if (err) console.error(err);
        result.imageText = "Asimo robot";
        result.save(function(err) {
            if(err) console.error(err);
            console.log("saved imageText");
            count += 1;
            if (count === 8) {
                mongoose.disconnect();
            }
        });
    });
    
     exhibits.findOne({title: "Mineral and Rock ID"}, function(err, result){
        if (err) console.error(err);
        result.imageText = "quartz";
        result.save(function(err) {
            if(err) console.error(err);
            console.log("saved imageText");
            count += 1;
            if (count === 8) {
                mongoose.disconnect();
            }
        });
    });
    
    exhibits.findOne({title: "Mechanical to Electrical Energy"}, function(err, result){
        if (err) console.error(err);
        result.imageText = "bicycle-powered light bulb";
        result.save(function(err) {
            if(err) console.error(err);
            console.log("saved imageText");
            count += 1;
            if (count === 8) {
                mongoose.disconnect();
            }
        });
    });
    
    exhibits.findOne({title: "Colors and Light"}, function(err, result){
        if (err) console.error(err);
        result.imageText = "primary colors";
        result.save(function(err) {
            if(err) console.error(err);
            console.log("saved imageText");
            count += 1;
            if (count === 8) {
                mongoose.disconnect();
            }
        });
    });
    
    exhibits.findOne({title: "Building Telescopes"}, function(err, result){
        if (err) console.error(err);
        result.imageText = "outdoor telescope";
        result.save(function(err) {
            if(err) console.error(err);
            console.log("saved imageText");
            count += 1;
            if (count === 8) {
                mongoose.disconnect();
            }
        });
    });
    
    exhibits.findOne({title: "Rocks and Minerals of Mars"}, function(err, result){
        if (err) console.error(err);
        result.imageText = "rock in the Adirondacks";
        result.save(function(err) {
            if(err) console.error(err);
            console.log("saved imageText");
            count += 1;
            if (count === 8) {
                mongoose.disconnect();
            }
        });
    });
    
    exhibits.findOne({title: "Planetary Globes: Similarities and Differences"}, function(err, result){
        if (err) console.error(err);
        result.imageText = "balls that look like different planets";
        result.save(function(err) {
            if(err) console.error(err);
            console.log("saved imageText");
            count += 1;
            if (count === 8) {
                mongoose.disconnect();
            }
        });
    });
    
});

