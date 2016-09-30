// this file should contain two routes
// GET Route to /survey which should display the survey page
// default USE route that leads to home.html which displays the home page.

// Routes --- 
app.get('/', function(req, res){
	res.send("Bower is installed but why don't I need the slash");
});

app.get('/USE', function(req, res){

	res.sendFile(path.join(__dirname, 'public','home.html'));
});

app.get('/survey', function(req, res){

	res.sendFile(path.join(__dirname, 'public','survey.html'));
});

module.exports = router;