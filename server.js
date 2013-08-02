try{
    var config = require('./config')
} catch (err){
    var config = {}

    config.rabbit_host = 'localhostjoker'

    config.django_host = 'localhost'
    config.django_port = 8000

    config.django_https = false;

    config.node_port = 8888;

    module.exports = config;
}

var http = require('http'),
    https = require('https');

var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')

io.set('match origin protocol', true);
app.listen(config.node_port);

function isin(obj,arr) {
    return (arr.indexOf(obj) != -1);
}

function handler (req, res) {
  console.log(req.url);
}

function connect_to_rabbit(){
    console.log("Connecting to rabbitmq server '" + config.rabbit_host + "'...");
    var conn = amqp.createConnection({ host: config.rabbit_host });

    conn.on('error', function(error) {
        console.log("Connection failed, retry in 5 sec...");
        t=setTimeout(function() {
            connect_to_rabbit()
        }, 5000);
    });

    conn.on('ready', function () {
        console.log("Connected to rabbitmq server!");

        // Create a queue and bind to all messages.
        // Use the default 'amq.topic' exchange
        console.log('Starting ovivo socket.io server...');

        conn.queue('ovivo-websocket', {durable:false, autoDelete:false}, function(queue){
//        conn.publish('ovivo-websocket','connected');

            // Catch all messages
            queue.bind('#');

            // Receive messages
            queue.subscribe(function (message) {
                var data = message.data.toString('utf8'),
                    json_data = JSON.parse(data),
                    recipients = json_data["users"],

                    emitted_data = JSON.stringify(
                        {'data': json_data['data']});
                
                for (var key in io.sockets.sockets) {
                    if (isin(io.sockets.sockets[key].user_id, recipients)){
                        io.sockets.sockets[key].emit('messages',
                            emitted_data);
                    };
                };

            });

        });

        conn.queue('ovivo-websocket-2', {durable: false, autoDelete: false},
            function(queue) {
                queue.bind('#');

                queue.subscribe(function(message) {
                    var data = message.data.toString('utf8'),
                        json_data = JSON.parse(data),
                        recipients = json_data["users"],

                        emitted_data = JSON.stringify(
                            {'data': json_data['data']});

                    for(var key in io.sockets.sockets) {
                        if(isin(io.sockets.sockets[key].user_id, recipients)
                        ) {
                            io.sockets.sockets[key].emit('data',
                                emitted_data);
                        }
                    }
                });
            }
        );

    });
}

function check_session(sessionid, socket){

    var options = {
        host: config.django_host,
        port: config.django_port,
        path: '/profiles/check/',
        headers: {'Cookie': "sessionid=" + sessionid}
    };

    module = config.django_https ? https : http;

    module.get(options, function(res) {

        res.on('data', function (reponse_body) {

            if (res.statusCode==200){
                console.log("Awsome, authentication successful with user:" + reponse_body);
                socket.user_id = parseInt(reponse_body);

            } else {
                console.log(":( auth failed for user:" + reponse_body);
            }

        });

    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });
}

io.sockets.on('connection', function (socket) {
    socket.emit('connected');

    socket.on('auth', function (data) {
        console.log('Auth request received with sessionid=' + data);
        check_session(data, socket);
    });

    socket.on('send', function (data) {
        console.log('I received a broadcast');
        io.sockets.emit('messages', data);
    });

});


var sys = require('sys');
var amqp = require('amqp');

var conn = connect_to_rabbit();

