var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var travel = require('./routes/travel')

var server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/countries', travel)

module.exports = server
