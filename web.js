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
    req.headers.cookie = 'sessionid=509a36c77b4869539acea9737ac2089e';

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

app.all('/api/*', proxyFunc);

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