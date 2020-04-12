/* This file spins up our node+express web server */

// Node command that gives us acceess to the express API
var express = require('express');

// Create our app
var app = express();

// Let Heroku grab the port environment variable and supply it
const PORT = process.env.PORT || 3000;

// because open weather api only uses http we have to re-route network traffic over https through http
app.use(function (request, response, next) {
  if (request.headers['x-forwarded-proto'] === 'https') {
    response.redirect('http://' + request.hostname + request.url);
  } else {
    next();
  }
});

// Tell our web server which file folder to serve
app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});

// Type 'node ${name_of_web_server_file}