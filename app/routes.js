var Exhibits = require('./models/exhibits.js');
var News = require('./models/news.js');
var Personnel = require('./models/personnel.js');
var Resources = require('./models/resources.js');
var Shows = require('./models/shows.js');
var Text = require('./models/text.js');

module.exports = function(app, db) {
    
    app.get('/', function (req, res) {
        News.find({}).sort('order').exec(function(err, docs) {
            if (err) console.log(err);
            res.render('pages/home', 
            {
                title : 'Home',
                page: 'home',
                newsItems: docs
            });
        });
    });
    
    app.get('/home', function (req, res) {
        News.find({}).sort('order').exec(function(err, docs) {
            if (err) console.log(err);
            res.render('pages/home', 
            {
                title : 'Home',
                page: 'home',
                newsItems: docs
            });
        });
    });
    
    app.get('/schoolcalendar', function (req, res) {
        Text.findOne({name: "calendarIntro"}, function(err, textResult) {
            if (err) console.log(err);
            res.render('pages/calendar', 
                {
                    title : 'School Calendar',
                    page: 'calendar',
                    intro: textResult.text
                });
        });
    });
    
    app.get('/publicshows', function (req, res) {
        Shows.find({status: 'upcoming'}).sort('order').exec(function(err, upcomingShows) {
            if (err) console.log(err);
            Shows.find({status: 'previous'}).sort('order').exec(function(err, previousShows) {
                if (err) console.log(err);
                Text.findOne({name: "showsIntro"}, function(err, textResult) { 
                    if (err) console.log(err);
                    res.render('pages/shows', 
                    {
                        title : 'Public Shows',
                        page: 'shows',
                        intro: textResult.text,
                        upcoming: upcomingShows,
                        previous: previousShows
                    });
                });
            });
        });
    });
    
    app.get('/resources', function (req, res) {
        Resources.find({}).sort('order').exec(function(err, docs) {
            if (err) console.log(err);
            Text.findOne({name: "resourcesIntro"}, function(err, textResult) {
                if (err) console.log(err);
                res.render('pages/resources', 
                {
                    title : 'Resources',
                    page: 'resources',
                    resources: docs,
                    intro: textResult.text
                });
            });
        });
    });
    
    app.get('/sciencecenter', function (req, res) {
        Exhibits.find({}).sort('order').exec(function(err, docs) {
            if (err) console.log(err);
            Text.findOne({name: "scienceCenterIntro"}, function(err, textResult) {
                if (err) console.log(err);
                res.render('pages/sciencecenter', 
                {
                    title : 'Science Center',
                    page: 'sciencecenter',
                    exhibits: docs,
                    intro: textResult.text
                });
            });
        });
    });
    
    app.get('/contact', function (req, res) {
        var mapsApiKey = process.env.MAPSAPIKEY;
        Personnel.find({}).sort('order').exec(function(err, docs) {
            if (err) console.log(err);
            Text.findOne({name: "directions"}, function(err, textResult) {
                if (err) console.log(err);
                res.render('pages/contact', 
                    {
                        title : 'Contact',
                        page: 'contact',
                        apikey: mapsApiKey,
                        directions: textResult.text,
                        personnel: docs
                    });
            });
        });
    });
    
};

