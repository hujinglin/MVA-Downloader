"user strict";

var http = require('http')
var config = require('../config')
var app = require('../app')

var server = http.createServer(app)

var port = config.port

server.listen(config.port)

server.on('error', function (err) {
    switch (err.code) {
        case 'EACCES':
            console.log('Port:' + port + ' requires elevated privileges')
            break
        case 'EADDRINUSE':
            console.log('Port:' + port + ' is already in use')
            break
        default:
            console.log(err)
            throw err
    }
    process.exit(1)
})

console.log('Server started on port:' + config.port)
















