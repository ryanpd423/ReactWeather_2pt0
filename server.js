/* This file spins up our node+express web server */

// Node command that gives us acceess to the express API
var express = require('express');

// Create our app
var app = express();

// Tell our web server which file folder to server
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});

// Type 'node ${name_of_web_server_file}