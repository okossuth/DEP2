var app, express, getPages, pg, port, processMainPage;
var proxy, supportProxy;
var httpProxy = require('http-proxy');
var _ = require('underscore');
var http = require('http');
var remoteHost = 'dev.ovivo.dk';

express = require('express');

express.static.mime.define({'text/cache-manifest': ['appcache']});

app = express();

port = process.env.PORT || 5000;

var precacheResources = [
];

var proxyFunc = function (req, res) {
    req.headers.cookie = 'sessionid=765b7cf89fe8eb340373b8b8d16ed955';

    proxy.proxyRequest(req, res);
};

var renderApp = function (req, res) {
    res.render('app');
};

var renderAppInt = function (req, res, arg) {
    res.render('app_' + req.params.lang);
};

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.set('views', __dirname + '/app');

// app.all('/api/1.0/users/1979/events/', function (req, res) {
//     res.send('[]');
// });

var _workingHours = {
    "5296": [{
        "available": true,
        "end_time": "17:00",
        "repeat": 1, 
        "end_date": "2013-05-31",
        "start_date": "2013-05-01", 
        "groups": [2676, 2679], 
        "pk": 1,
        "start_time": "09:00", 
        "weekdays": "1,2,3,4,5", 
        "exclusions": []
    }, {
        "available": true, 
        "end_time": "20:00", 
        "repeat": 1, 
        "start_date": "2013-05-01", 
        "groups": [2676, 2679], 
        "pk": 2,
        "start_time": "18:00", 
        "weekdays": "6,7", 
        "exclusions": []
    }],

    "6177": [{
        "available": true, 
        "end_time": "17:00", 
        "repeat": 1, 
        "end_date": "2013-05-31", 
        "start_date": "2013-05-01", 
        "groups": [2676, 2679], 
        "pk": 3,
        "start_time": "09:00", 
        "weekdays": "1,2,3,4,5", 
        "exclusions": []
    }, {
        "available": true, 
        "end_time": "20:00", 
        "repeat": 1, 
        "start_date": "2013-05-01", 
        "groups": [2676, 2679], 
        "pk": 4,
        "start_time": "18:00", 
        "weekdays": "6,7", 
        "exclusions": []
    }]
};

// app.get('/api/1.0/working-hours/', function (req, res) {
//     res.end(JSON.stringify(_workingHours));
// });

app.all('/api/*', proxyFunc);

app.all('/dist/ovivo-desktop-employee-require.js', function (req, res, next) {
    // res.set({
    //     'X-SourceMap': '/dist/ovivo-desktop-employee-require.js.map'
    // });

    next();
});

app.all('/', renderApp);
app.all('/:lang/', renderAppInt);
app.all('/events/*', renderApp);

// app.use('/', express["static"]('./app'), { maxAge: 31557600000 });

app.use('/', express["static"]('./app'));

app.listen(port, function() {
    proxy = new httpProxy.HttpProxy({
        target: {
            host: remoteHost,
            port: 80
        }
    });

    return true;
});