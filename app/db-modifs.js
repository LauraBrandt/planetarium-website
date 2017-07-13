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
var TOTAL = 1;  // Make sure to change

db.once("open", function(callback){
    console.log('database connection successful');

    shows.findOne({order: 1}, function(err, doc) {
        if (err) console.error(err)
        doc.dates.pop();
        doc.save(function(err) {
            if (err) console.error(err)
            onSave()
        })
    })

});

function onSave() {
    console.log("saved");
    count++;
    if (count === TOTAL) {
        mongoose.disconnect();                
    } 
}