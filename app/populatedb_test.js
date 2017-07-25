var exhibits = require('./models/exhibits.js');
var news = require('./models/news.js');
var personnel = require('./models/personnel.js');
var resources = require('./models/resources.js');
var shows = require('./models/shows.js');
var texts = require('./models/text.js');
var posts = require('./models/post.js');
var mongoose = require('mongoose');
var DB_URL = process.env.MONGOLAB_URI || "mongodb://localhost:27017/planetarium";
mongoose.connect(DB_URL);
var db = mongoose.connection;

var exhibitCount = 0,
    totalExhibits = 8,
    exhibitsDone = false;
var newsCount = 0,
    totalNews = 4,
    newsDone = false;
var personnelCount = 0,
    totalPersonnel = 4,
    personnelDone = false;
var resourcesCount = 0,
    totalResources = 12,
    resourcesDone = false;
var showsCount = 0,
    totalShows = 6,
    showsDone = false;
var textCount = 0,
    totalText = 6,
    textDone = false;
var postCount = 0,
    totalPosts = 1,
    postsDone = false;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function(callback){
    console.log('database connection successful');
});
var exhibitList = [
    { title: "Magnets", imageName: "magnet.svg", imageText: "magnetic field", order: 1},
    { title: "Building Robots", imageName: "asimo_robot.jpg", imageText: "Asimo robot", order: 2},
    { title: "Mineral and Rock ID", imageName: "quartz.jpg", imageText: "quartz", order: 3},
    { title: "Mechanical to Electrical Energy", imageName: "bicycle-powered light bulb", imageText: "", order: 4},
    { title: "Colors and Light", imageName: "color.svg", imageText: "primary colors", order: 5},
    { title: "Building Telescopes", imageName: "telescope.jpg", imageText: "outdoor telescope", order: 6},
    { title: "Rocks and Minerals of Mars", imageName: "adirondack.jpg", imageText: "rock in the Adirondacks", order: 7},
    { title: "Planetary Globes: Similarities and Differences", imageName: "globes-1.jpg", imageText: "balls that look like different planets", order: 8}
];

var i;

for(i=0; i < exhibitList.length; i++) {
    var newExhibit = new exhibits(exhibitList[i]);
    newExhibit.save(function(err, doc) {
        if (err) console.error(err);
        console.log("New exhibit saved to database");
        exhibitCount += 1;
        if (exhibitCount === totalExhibits) {
            exhibitsDone = true;
        }
        checkDone();
    });
}

var newsList = [
    { title: "Public Show - The Dawn of the Space Age", imageName: "spaceage.jpg", imageText: "astronaut from the show", order: 1,
        description: [
            "Our next public show is <strong>Saturday, October 15th at 1 pm</strong>.",
            "The show is <em>The Dawn of the Space Age</em>, and will include an update of both the Kepler and Hubble missions. This event is a part of the UN’s global outreach effort World Space Week, and is the only one of these events in North Carolina.",
            "Admission is free, but seating is limited to sixty-five per program. Groups of ten or more are encouraged to make reservations in advance."
            ]
    },
    { title: "Total Solar Eclipse", imageName: "eclipsemap.jpg", imageText: "Map of the path of totality of the eclipse in NC/SC", order: 2,
        description: [
            "The Great American Eclipse is coming <strong>August 21, 2017</strong>.",
            "<a href='images/news/eclipsemap_full.jpg'>Click here</a> for the full-size map.",
            "Read more about it <a href='http://eclipse2017.nasa.gov/'>here</a> and <a href='/posts/eclipse'>here</a>.",
            "<a href='http://www.exploratorium.edu/eclipse/video/solar-eclipse-hands-safe-viewing-techniques'>A safe method for viewing that's very hands-on</a>"
            ]
    },
    { title: "New Planet Found", imageName: "proxima_b.jpg", imageText: "Artist's impression of Proxima Centauri b", order: 3,
        description: [
            "<a href='https://www.youtube.com/watch?v=lysJduOqads'>Click here</a> to watch the announcement of a new planet found orbiting our closest neighbor."
            ]
    },
    { title: "365 Days of Astronomy Podcast", imageName: "365astronomy.jpg", imageText: "Logo of 365 Days of Astronomy", order: 4,
        description: [
            "<a href='http://cosmoquest.org/x/365daysofastronomy/2009/03/16/march-16th/'>Listen to</a> Ken Brandt's podcast for the International Year of Astronomy: How to find the directions using the Sun and shadows.",
            "<a href='http://cosmoquest.org/x/365daysofastronomy/'>Listen to</a> today's podcast"
            ]
    }
];

for(i=0; i < newsList.length; i++) {
    var newNewsItem = new news(newsList[i]);
    newNewsItem.save(function(err, doc) {
        if (err) console.error(err);
        console.log("New news item saved to database");
        newsCount += 1;
        if (newsCount === totalNews) {
            newsDone = true;
        }
        checkDone();
    });
}

var personnelList = [
    { fullName: "Ken Brandt, M. Ed., NBCT", first: "Ken", last: "Brandt", title: "Director", email: "brandtk.psrc@robeson.k12.nc.us", imageName: "ken.jpg", order: 1},
    { fullName: "Joy Ivey", title: "Secretary", email: "joy.ivey@robeson.k12.nc.us", order: 2},
    { fullName: "Cleveland Oxendine", title: "Driver", order: 3},
    { fullName: "Dr. Elizabeth Younce", first: "Elizabeth", last: "Younce", title: "Supervisor, Assistant Superintendent of Curriculum & Instruction", phone: "910-735-2370", order: 4}
];

for(i=0; i < personnelList.length; i++) {
    var newPersonnel = new personnel(personnelList[i]);
    newPersonnel.save(function(err, doc) {
        if (err) console.error(err);
        console.log("New person saved to database");
        personnelCount += 1;
        if (personnelCount === totalPersonnel) {
            personnelDone = true;
        }
        checkDone();
    });
}

var resourcesList = [
    { title: "Clear Sky Forecast", author: "cleardarksky.com", fileLink: "http://cleardarksky.com/c/RbsnPntNCkey.html", order: 0, description:"Check out which days will have the best weather for astronomical viewing. Click for our detailed astronomer's weather forecast."},
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
        resourcesCount += 1;
        if (resourcesCount === totalResources) {
            resourcesDone = true;
        }
        checkDone();
    });
}

var showsList = [
    { title: "Dawn of the Space Age", status: "upcoming", order: 1, 
        dates: [{
            weekday: "Saturday", 
            month: "October",
            day: 15,
            year: 2017,
            time: "1:00",
            ampm: "pm"
        }],/*"Saturday, October 15th at 1 pm."*/ 
        description: [
            "<em>Note: this program is suitable for those 8+ years old.</em>",
            "The program shows the beginning of our space exploration, and we finish with the future of space exploration."
            ]
    },
    { title: "Natural Selection", status: "previous", order: 2,
        description: [
            "We celebrate two great science thinkers born in February - Galileo and Darwin."
            ]
    },
    { title: "Cool Stuff that Blows Up!", status: "previous", order: 3,
        description: [
            "Exactly what it sounds like."
            ]
    },
    { title: "Transit of Venus", status: "previous", order: 4,
         description: [
            "How to view it, what you'll see, and how we use transits to prove the existence of other planets like Earth!"
            ]
    },
    { title: "Robots In Space!", status: "previous", order: 5},
    { title: "Hubble - 20 Great Years!", status: "previous", order: 6,
        description: [
            "The Hubble Space Telescope has changed how we see the universe and ourselves. Find out what we've learned and what we've yet to learn.  We will also take a 'sneak peak' at some brand new planetarium technology-the mirrordome projection system!  Come see yourself surrounded by space scenery!"
            ]
    }
];

for(i=0; i < showsList.length; i++) {
    var newShow = new shows(showsList[i]);
    newShow.save(function(err, doc) {
        if (err) console.error(err);
        console.log("New show saved to database");
        showsCount += 1;
        if (showsCount === totalShows) {
            showsDone = true;
        }
        checkDone();
    });
}

var textList = [
    { name: "homeIntro"},
    { name: "scienceCenterIntro", text: "Attached to the planetarium is our science center, where we're always introducing new fun, interactive exhibits that the students can play with while learning cool science at the same time! See what our current exhibits are below."},
    { name: "showsIntro", text: "The planetarium is open to the public for shows on Saturdays. Shows generally run about 1 hour. Seating capacity is 65 people/program. Groups of ten or more are encouraged to make reservations in advance. For reservations, call 735-2148."},
    { name: "calendarIntro"},
    { name: "resourcesIntro"},
    { name: "directions", text: "From I-95: Take exit 17, turn onto Caton Rd. The planetarium will be about .25 mi to the west. There's a small street with parking in front of it."},
];

for(i=0; i < textList.length; i++) {
    var newText = new texts(textList[i]);
    newText.save(function(err, doc) {
        if (err) console.error(err);
        console.log("New text saved to database");
        textCount += 1;
        if (textCount === totalText) {
            textDone = true;
        }
        checkDone();
    });
}

var postList = [
    {
        name: "eclipse",
        header: "Total Solar Eclipse",
        body: [
            "On August 21, 2017, there will be a total eclipse of the Sun visible from the U.S. (and only the US!) The path of what is being called the 'All American' total eclipse is only about 60 miles wide and goes from a beach in Oregon to a beach in South Carolina, crossing the country diagonally. The partial eclipse, on the other hand, will be visible to 500 million people in all parts of the US and North America.",
            "It will be very important that everyone who tries to see the eclipse on that Monday in August have information on the local timing of the eclipse and safe viewing instructions.",
            "The National Science Teachers Association (NSTA) is making available a popular-level, non-technical introduction to help explain the eclipse, plus how and when to view it safely, with the maps, charts and links you need. The free 8-page booklet, by astronomers/educators Andrew Fraknoi and Dennis Schatz, is available <a href='http://www.nsta.org/publications/press/extras/files/solarscience/SolarScienceInsert.pdf'>in PDF format</a>"
        ]
    },
];

for(i=0; i < postList.length; i++) {
    var newPost = new posts(postList[i]);
    newPost.save(function(err, doc) {
        if (err) console.error(err);
        console.log("New post saved to database");
        postCount += 1;
        if (postCount === totalPosts) {
            postsDone = true;
        }
        checkDone();
    });
}

function checkDone() {
   if (exhibitsDone && newsDone && personnelDone && resourcesDone && showsDone && textDone && postsDone) {
        mongoose.disconnect();
    } 
}
