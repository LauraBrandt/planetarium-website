var fs = require('fs');

var Exhibits = require('./models/exhibits.js');
var News = require('./models/news.js');
var Personnel = require('./models/personnel.js');
var Resources = require('./models/resources.js');
var Shows = require('./models/shows.js');
var Text = require('./models/text.js');
var Posts = require('./models/posts.js');

module.exports = function(app, db) {
    
    app.get(['/', '/home'], function (req, res) {
        fs.readdir(process.cwd() + '/public/images/slideshow', function(err, filenames) {
            if (err) console.error(err);
            var imgPaths = filenames.map(function(imgName) {
                return "images/slideshow/" + imgName;
            });
            Text.findOne({name: "homeIntro"}, function(err, textResult) {
                if (err) console.error(err);
                News.find({}).sort('order').exec(function(err, docs) {
                    if (err) console.error(err);
                    res.render('pages/home', 
                    {
                        title : 'Home',
                        page: 'home',
                        newsItems: docs, 
                        imgArray: imgPaths,
                        intro: textResult
                    });
                });
            });
        });
    });

    app.get('/schoolcalendar', function (req, res) {
        Text.findOne({name: "calendarIntro"}, function(err, textResult) {
            if (err) console.error(err);
            res.render('pages/calendar', 
                {
                    title : 'School Calendar',
                    page: 'calendar',
                    intro: textResult
                });
        });
    });
    
    app.get('/publicshows', function (req, res) {
        Shows.find({status: 'upcoming'}).sort('order').exec(function(err, upcomingShows) {
            if (err) console.error(err);
            console.log("dates:", upcomingShows[0].dates);
            Shows.find({status: 'previous'}).sort('order').exec(function(err, previousShows) {
                if (err) console.error(err);
                Text.findOne({name: "showsIntro"}, function(err, textResult) { 
                    if (err) console.error(err);
                    res.render('pages/shows', 
                    {
                        title : 'Public Shows',
                        page: 'shows',
                        intro: textResult,
                        upcoming: upcomingShows,
                        previous: previousShows
                    });
                });
            });
        });
    });
    
    app.get('/resources', function (req, res) {
        Resources.find({}).sort('order').exec(function(err, docs) {
            if (err) console.error(err);
            Text.findOne({name: "resourcesIntro"}, function(err, textResult) {
                if (err) console.error(err);
                res.render('pages/resources', 
                {
                    title : 'Resources',
                    page: 'resources',
                    resources: docs,
                    intro: textResult
                });
            });
        });
    });
    
    app.get('/sciencecenter', function (req, res) {
        Exhibits.find({}).sort('order').exec(function(err, docs) {
            if (err) console.error(err);
            Text.findOne({name: "scienceCenterIntro"}, function(err, textResult) {
                if (err) console.error(err);
                res.render('pages/sciencecenter', 
                {
                    title : 'Science Center',
                    page: 'sciencecenter',
                    exhibits: docs,
                    intro: textResult
                });
            });
        });
    });
    
    app.get('/contact', function (req, res) {
        var mapsApiKey = process.env.MAPSAPIKEY;
        Personnel.find({}).sort('order').exec(function(err, docs) {
            if (err) console.error(err);
            Text.findOne({name: "directions"}, function(err, textResult) {
                if (err) console.error(err);
                res.render('pages/contact', 
                    {
                        title : 'Contact',
                        page: 'contact',
                        apikey: mapsApiKey,
                        directions: textResult,
                        personnel: docs
                    });
            });
        });
    });
    
    app.get('/posts/:postName', function (req, res) {
        //TODO: if post name doesn't exist
        var postName = req.params.postName;
        Posts.findOne({name: postName}, function(err, doc) {
            if (err) console.error(err);
            res.render('pages/post', 
                {
                    title : postName,
                    page: postName,
                    post: doc
                });
        });
    });
    
};

