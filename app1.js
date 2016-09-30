// this info is now in server.js

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
// var port = 5000;
var port = process.env.PORT || 80;

app.use(express.static('src/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// app.set('view engine', 'ejs');

 // Routes --- 
app.get('/', function(req, res){
	res.send("Bower is installed but why don't I need the slash");
});
app.get('/survey', function(req, res){

	res.sendFile(path.join(__dirname, 'public','survey.html'));
});


app.use(express.static('public'));
app.listen (5000, function (err){
	console.log("running server on port" + port);
});