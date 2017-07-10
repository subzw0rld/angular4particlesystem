'use strict';
var express = require('express'),
bodyParser = require('body-parser'),
fs = require('fs'),
app = express();

var data = require('./data/data.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/employee', function(req, res) {
    res.send(data);
});
app.listen(3000, function(){ 
    console.log('Webservice running at 3000');
});