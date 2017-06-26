var Exhibits = require('./models/exhibits.js');
var News = require('./models/news.js');
var Personnel = require('./models/personnel.js');
var Resources = require('./models/resources.js');
var Shows = require('./models/shows.js');

module.exports = function(app, db) {
    
    app.get('/', function (req, res) {
        res.render('pages/home', 
            {
                title : 'Home',
                page: 'home'
            });
    });
    
    app.get('/home', function (req, res) {
        res.render('pages/home', 
            {
                title : 'Home',
                page: 'home'
            });
    });
    
    app.get('/schoolcalendar', function (req, res) {
        res.render('pages/calendar', 
            {
                title : 'School Calendar',
                page: 'calendar'
            });
    });
    
    app.get('/publicshows', function (req, res) {
        Shows.find({status: 'upcoming'}).sort('order').exec(function(err, upcomingShows) {
            if (err) console.log(err);
            Shows.find({status: 'previous'}).sort('order').exec(function(err, previousShows) {
                if (err) console.log(err);
                res.render('pages/shows', 
                    {
                        title : 'Public Shows',
                        page: 'shows',
                        upcoming: upcomingShows,
                        previous: previousShows
                    });
            });
        });
    });
    
    app.get('/resources', function (req, res) {
        res.render('pages/resources', 
            {
                title : 'Resources',
                page: 'resources'
            });
    });
    
    app.get('/sciencecenter', function (req, res) {
        Exhibits.find({}).sort('order').exec(function(err, docs) {
            if (err) console.log(err);
            res.render('pages/sciencecenter', 
                {
                    title : 'Science Center',
                    page: 'sciencecenter',
                    exhibits: docs
                });
        });
    });
    
    app.get('/contact', function (req, res) {
        var mapsApiKey = process.env.MAPSAPIKEY;
        res.render('pages/contact', 
            {
                title : 'Contact',
                page: 'contact',
                apikey: mapsApiKey
            });
    });
    
};

