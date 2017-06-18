/* Dependencies */
var express = require('express'),
    sassMiddleware = require('node-sass-middleware'),
    path    = require('path'),
    logger = require('morgan'),
    favicon = require('serve-favicon');

var app = express();

/* Configuration */
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use(
    sassMiddleware({
        src: __dirname + '/sass',
        dest: __dirname + '/public/stylesheets',
        prefix:  '/stylesheets',
        debug: true,
    })
);
app.use(express.static(path.join(__dirname, 'public')));

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
    res.render('pages/shows', 
        {
            title : 'Public Shows',
            page: 'shows'
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
    res.render('pages/sciencecenter', 
        {
            title : 'Science Center',
            page: 'sciencecenter'
        });
});

app.get('/about', function (req, res) {
    res.render('pages/about', 
        {
            title : 'About Us',
            page: 'about'
        });
});

app.get('/directions', function (req, res) {
    res.render('pages/directions', 
        {
            title : 'Directions',
            page: 'directions'
        });
});


/* Listen */
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Listening on port', port);
});