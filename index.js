
/**
 * Module dependencies.
 */

var express = require('express');
var adapter = require('adapter');
var app = module.exports = express();


// middleware

app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(app.router);
app.use(express.static(__dirname + '/public'));

// mount

app.use(adapter('bread', './examples'));
