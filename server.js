/* Dependencies */
var express = require('express'),
    sassMiddleware = require('node-sass-middleware'),
    path    = require('path'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    favicon = require('serve-favicon'),
    routes = require('./app/routes.js');

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

/* Set up database connection */
var DB_URL = process.env.MONGOLAB_URI || "mongodb://localhost:27017/planetarium";
mongoose.connect(DB_URL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function(callback){
    console.log('Mongoose default connection open to ' + DB_URL);
    // Run app
    routes(app, db);
});

/* Listen */
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Listening on port', port);
});