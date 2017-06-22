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
var exhibitList = [
    { title: "Magnets", imageName: "magnet.svg", order: 1},
    { title: "Building Robots", imageName: "asimo_robot.jpg", order: 2},
    { title: "Mineral and Rock ID", imageName: "quartz.jpg", order: 3},
    { title: "Mechanical to Electrical Energy", imageName: "bike_bulb-1.jpg", order: 4},
    { title: "Colors and Light", imageName: "color.svg", order: 5},
    { title: "Building Telescopes", imageName: "telescope.jpg", order: 6},
    { title: "Rocks and Minerals of Mars", imageName: "adirondack.jpg", order: 7},
    { title: "Planetary Globes: Similarities and Differences", imageName: "globes-1.jpg", order: 8}
];

var i;

for(i=0; i < exhibitList.length; i++) {
    var newExhibit = new exhibits(exhibitList[i]);
    newExhibit.save(function(err, doc) {
        if (err) console.error(err);
        console.log("New exhibit saved to database");
    });
}

var newsList = [
    { title: "Public Show - The Dawn of the Space Age", imageName: "images/news/spaceage.jpg", imageText: "astronaut from the show", order: 1},
    { title: "Total Solar Eclipse", imageName: "eclipsemap.jpg", imageText: "Map of the path of totality of the eclipse in NC/SC", order: 2},
    { title: "New Planet Found", imageName: "proxima_b.jpg", imageText: "Artist's impression of Proxima Centauri b", order: 3},
    { title: "365 Days of Astronomy Podcast", imageName: "365astronomy.jpg", imageText: "Logo of 365 Days of Astronomy", order: 4}
];

for(i=0; i < newsList.length; i++) {
    var newNewsItem = new news(newsList[i]);
    newNewsItem.save(function(err, doc) {
        if (err) console.error(err);
        console.log("New news item saved to database");
    });
}

var personnelList = [
    { name: "Ken Brandt, M. Ed., NBCT", title: "Director", email: "brandtk.psrc@robeson.k12.nc.us", imageName: "ken.jpg", order: 1},
    { name: "Joy Ivey", title: "Secretary", email: "joy.ivey@robeson.k12.nc.us", order: 2},
    { name: "Cleveland Oxendine", title: "Driver", order: 3},
    { name: "Dr. Elizabeth Younce", title: "Supervisor, Assistant Superintendent of Curriculum & Instruction", phone: "910-735-2370", order: 4}
];

for(i=0; i < personnelList.length; i++) {
    var newPersonnel = new personnel(personnelList[i]);
    newPersonnel.save(function(err, doc) {
        if (err) console.error(err);
        console.log("New person saved to database");
    });
}

var resourcesList = [
    { title: "A hands-on method for viewing an eclipse", author: "Exploratorium", fileLink: "http://www.exploratorium.edu/eclipse/video/solar-eclipse-hands-safe-viewing-techniques", order: 1, description:"The Exploratorium Science Center's video about a simple method for hands-on viewing of a solar eclipse-SAFELY!"},
    { title: "Script for Clockwork Skies: 3rd grade", author: "Ron Proctor", fileLink: "resource_files/clockwork_skies_script.pdf", fileType:"pdf", size:"1.04 MB", order: 2},
    { title: "Third grade activity: Sundials", author: "Planetary Society planetary.org", fileLink: "resource_files/Planetary_Report_2012_v32n2_Kids.pdf", fileType:"pdf", size:"1.80 MB", order: 3, description:"This activity allows your students to make a Marsdial like the one used on the Curiosity and Opportunity rovers."},
    { title: "Determining your cardinal directions using shadows: Third grade", author: "Ken Brandt", fileLink: "resource_files/North_at_Noon_activity_and_podcast.docx", fileType:"doc", size:"154.68 KB", order: 4, description:"A simple way to use shadows and timing to determine the cardinal directions N, S, E, and W."},
    { title: "Five Starships: Sixth grade", author: "Ken Brandt", fileLink: "resource_files/Five_Starships.docx", fileType:"doc", size:"66.42 KB", order: 5, description:"This is a project-based activity about missions of exploration."},
    { title: "sixth grade: Overview Effect", author: "Ken and Lorrie Brandt", fileLink: "resource_files/The_Overview_Effect.docx", fileType:"doc", size:"483.01 KB", order: 6},
    { title: "Comparing Earth, Mars, and Titan: Earth/Environmental Science", author: "Ken Brandt", fileLink: "resource_files/earth_mars_titan_9th_grade.doc", fileType:"doc", size:"24.50 KB", order: 7, description:"Students research and compare the two objects in the solar system most like Earth."},
    { title: "Citizen Science Activity: Find Your Own Exoplanet", author: "Ken Brandt", fileLink: "resource_files/Planet_hunters_Citizen_Science_Activity.docx", fileType:"doc", size:"6.28 MB", order: 8, description:"Using actual data from the Kepler mission, students can interpret graphs, learn about stellar light curves, and find actual exoplanets going around other stars."},
    { title: "Kepler Mission Activities: Earth/Environmental Science", author: "Ken Brandt", fileLink: "resource_files/Kepler_Mission_computer_lab_assignment_9.doc", fileType:"doc", size:"27.00 KB", order: 9},
    { title: "Kepler stellar light curve (for use with the planethunter activity)", author: "Alan Gould/Kepler.nasa.gov", fileLink: "resource_files/TransitLightCurve.mov", fileType:"video", size:"3.66 MB", order: 10},
    { title: "Free Star Map", author: "www.skymaps.com", fileLink: "http://www.skymaps.com/downloads.html", order: 11, description:"Want to know what the evening sky will look like? You can print a free star map, courtesy of skymaps.com. Just click on the current month."}
];

for(i=0; i < resourcesList.length; i++) {
    var newResource = new resources(resourcesList[i]);
    newResource.save(function(err, doc) {
        if (err) console.error(err);
        console.log("New resource saved to database");
    });
}

var showsList = [
    { title: "Dawn of the Space Age", status: "upcoming", description: "Note: this program is suitable for those 8+ years old. The program shows the beginning of our space exploration, and we finish with the future of space exploration.", date: "Saturday, October 15th at 1 pm.", order: 1},
    { title: "Natural Selection", status: "previous", description: "We celebrate two great science thinkers born in February - Galileo and Darwin.", order: 2},
    { title: "Cool Stuff that Blows Up!", status: "previous", description: "Exactly what it sounds like.", order: 3},
    { title: "Transit of Venus", status: "previous", description: "How to view it, what you'll see, and how we use transits to prove the existence of other planets like Earth!", order: 4},
    { title: "Robots In Space!", status: "previous", order: 5},
    { title: "Hubble - 20 Great Years!", status: "previous", description: "The Hubble Space Telescope has changed how we see the universe and ourselves. Find out what we've learned and what we've yet to learn.  We will also take a 'sneak peak' at some brand new planetarium technology-the mirrordome projection system!  Come see yourself surrounded by space scenery!", order: 6}
];

for(i=0; i < showsList.length; i++) {
    var newShow = new shows(showsList[i]);
    newShow.save(function(err, doc) {
        if (err) console.error(err);
        console.log("New show saved to database");
    });
}