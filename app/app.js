var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
// var apiRoute = require("");
var port = 5000;
// var port = process.env.PORT || 5000;
// var bookRouter = express.bookRouter();

app.use(express.static('public'));
app.use(express.static('src/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));


 // Routes --- 
app.get('/', function(req, res){
	res.send("Bower is installed but why don't I need the slash");
});
app.get('/survey', function(req, res){

	res.sendFile(path.join(__dirname, 'public','survey.html'));
});


app.listen (5000, function (err){
	console.log("running server on port" + port);
});