module.exports = function(app) {
    
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
    
    app.get('/contact', function (req, res) {
        res.render('pages/contact', 
            {
                title : 'Contact',
                page: 'contact'
            });
    });
    
    app.get('/directions', function (req, res) {
        res.render('pages/directions', 
            {
                title : 'Directions',
                page: 'directions'
            });
    });
    
};

