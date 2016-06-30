'use strict'

var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
var http = require('http');

var xml = fs.readFileSync('vast1.xml', 'utf8');



var app = express();
app.get('/ad*', randomAd);

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
var server = http.createServer(app);
server.listen(port);

function randomAd(req, res, next){
	res.set('Content-Type', 'text/xml');
	res.send(xml);
  console.log('returned vast 1 ad');
}


function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}