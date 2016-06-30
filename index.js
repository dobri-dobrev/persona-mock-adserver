'use strict'

var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
var http = require('http');

var vast1 = fs.readFileSync('vast1.xml', 'utf8');
var vast2 = fs.readFileSync('vast2.xml', 'utf8');
var vast3 = fs.readFileSync('vast3.xml', 'utf8');

var vasts = [vast1, vast2, vast3];


var app = express();
app.get('/ad*', randomAd);

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
var server = http.createServer(app);
server.listen(port);

function randomAd(req, res, next){
	res.set('Content-Type', 'text/xml');
  var adId = getRandomInt(0,2);
	res.send(vasts[adId]);
  console.log('returned ad ' + adId);
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

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}