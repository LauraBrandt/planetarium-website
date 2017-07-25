var exhibits = require('./models/exhibits.js');
var news = require('./models/news.js');
var personnel = require('./models/personnel.js');
var resources = require('./models/resources.js');
var shows = require('./models/shows.js');
var texts = require('./models/text.js');
var posts = require('./models/posts.js');

var mongoose = require('mongoose');
var DB_URL = process.env.MONGOLAB_URI || "mongodb://localhost:27017/planetarium";
mongoose.connect(DB_URL);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var count = 0;
var TOTAL = 2;  // Make sure to change

db.once("open", function(callback){
    console.log('database connection successful');

    var newPost = new posts(
        {
            name: "eclipse",
            header: "Total Solar Eclipse",
            body: [
                "On August 21, 2017, there will be a total eclipse of the Sun visible from the U.S. (and only the US!) The path of what is being called the 'All American' total eclipse is only about 60 miles wide and goes from a beach in Oregon to a beach in South Carolina, crossing the country diagonally. The partial eclipse, on the other hand, will be visible to 500 million people in all parts of the US and North America.",
                "It will be very important that everyone who tries to see the eclipse on that Monday in August have information on the local timing of the eclipse and safe viewing instructions.",
                "The National Science Teachers Association (NSTA) is making available a popular-level, non-technical introduction to help explain the eclipse, plus how and when to view it safely, with the maps, charts and links you need. The free 8-page booklet, by astronomers/educators Andrew Fraknoi and Dennis Schatz, is available <a href='http://www.nsta.org/publications/press/extras/files/solarscience/SolarScienceInsert.pdf'>in PDF format</a>"
            ]
        }
    );
        
    newPost.save(function(err, doc) {
        if (err) console.error(err);
        onSave();
    });
    
    news.findOne({order: 2}, function(err, doc) {
        if (err) console.error(err)
        doc.description = 
            [
            "The Great American Eclipse is coming <strong>August 21, 2017</strong>.",
            "<a href='images/news/eclipsemap_full.jpg'>Click here</a> for the full-size map.",
            "Read more about it <a href='http://eclipse2017.nasa.gov/'>here</a> and <a href='/posts/eclipse'>here</a>.",
            "<a href='http://www.exploratorium.edu/eclipse/video/solar-eclipse-hands-safe-viewing-techniques'>A safe method for viewing that's very hands-on</a>"
            ];
        doc.save(function(err) {
            if (err) console.error(err);
            onSave();
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