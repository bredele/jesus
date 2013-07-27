
/**
 * Module dependencies.
 */

var express = require('express');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var app = express();


/**
 * Module configuration.
 */

var namespace = "/jesus";
var dirname = ".";


/**
 * Expose 'Adapter'
 */

module.exports =  function(name, dir){
  namespace = name;
  dirname = dir;
  return app;
};

app.get(namespace + '*', function(req, res){
  var params = querystring.parse(url.parse(req.url).query);
  var list = [];
  for(var param in params) {
    var filename = dirname + '/' + param;
    if(fs.existsSync(filename)){
      var buffer = fs.readFileSync(dirname + '/' + param);
      list.push(buffer);
    }
  }
  res.type('text/javascript');
  res.send(Buffer.concat(list));
});