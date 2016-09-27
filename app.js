var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = 5000;
// var port = process.env.PORT || 5000;
// var bookRouter = express.bookRouter();

app.use(express.static('public'));
// app.use(express.static('src/views
// app.use('views', './src/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.send("Bower is installed but index.html is in public dir not views");
});
app.get('/intro', function(req, res){
	res.send("Bower is installed but index.html is in public dir not views");
});

// bookRouter.route('/')
// 	.get(function (req, res){
// 		res.send ("Hello Books");
// 	});

// bookRouter.route('/single')
// 	.get(function (req, res){
// 		res.send ("Hello Single Book");
// 	});
// app.use('/Books', bookRouter)

// app.get('/',function(req, res){
// 	res.render('index', {
// 		title: "hello from render",
// 		nav: [{
// 			Link:'/books',
// 			Text:'books'
// 			},{
// 			Link:'/authors',
// 			Text:'authors'	
// 		}]
// 	});

app.listen (5000, function (err){
	console.log("running server on port" + port);
});