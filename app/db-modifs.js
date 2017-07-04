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
var total = 5;

db.once("open", function(callback){
    console.log('database connection successful');
    
    shows.findOne({order: 1}, function (err, doc) {
        if (err) console.error(err);
        doc.description = [
            "<em>Note: this program is suitable for those 8+ years old.</em>",
            "The program shows the beginning of our space exploration, and we finish with the future of space exploration."
            ];
        doc.save(function(err) {
            if (err) console.error(err);
            onSave();
        });
    });
    shows.findOne({order: 2}, function (err, doc) {
        if (err) console.error(err);
        doc.description = [
            "We celebrate two great science thinkers born in February - Galileo and Darwin."
            ];
        doc.save(function(err) {
            if (err) console.error(err);
            onSave();
        });
    });
    
    shows.findOne({order: 3}, function (err, doc) {
        if (err) console.error(err);
        doc.description = [
            "Exactly what it sounds like."
            ];
        doc.save(function(err) {
            if (err) console.error(err);
            onSave();
        });
    });
    
    shows.findOne({order: 4}, function (err, doc) {
        if (err) console.error(err);
        doc.description = [
            "How to view it, what you'll see, and how we use transits to prove the existence of other planets like Earth!"
            ];
        doc.save(function(err) {
            if (err) console.error(err);
            onSave();
        });
    });
    
    shows.findOne({order: 6}, function (err, doc) {
        if (err) console.error(err);
        doc.description = [
            "The Hubble Space Telescope has changed how we see the universe and ourselves. Find out what we've learned and what we've yet to learn.  We will also take a 'sneak peak' at some brand new planetarium technology-the mirrordome projection system!  Come see yourself surrounded by space scenery!"
            ];
        doc.save(function(err) {
            if (err) console.error(err);
            onSave();
        });
    });
    
function onSave() {
    console.log("saved");
    count++;
    if (count === total) {
        mongoose.disconnect();                
    } 
}

});

