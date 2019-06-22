
//adding dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var friends = require('./app/data/friends.js');

var app = express();
var PORT = process.env.PORT || 3000; 

//makes static assets in the public folder available 
app.use(express.static('app/public'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//adding routes
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// Start the server to begin listening
app.listen(process.env.PORT || 3000);
console.log("App running on port 3000")