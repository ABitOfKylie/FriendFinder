var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
// var port = 80;
var port = process.env.PORT || 80;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// start server/listener
app.listen (port, function (err){
	console.log("running server on port : " + port);
});

//  routes
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);



