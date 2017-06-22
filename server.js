/* Dependencies */
var express = require('express'),
    sassMiddleware = require('node-sass-middleware'),
    path    = require('path'),
    logger = require('morgan'),
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

/* Run */
routes(app);


/* Listen */
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Listening on port', port);
});