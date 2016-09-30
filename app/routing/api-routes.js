// this file should contain GET route with url /api/friends. Used to display all possible friends
// and a POST routes /api/friends used to handle incoming survey results and used to handle compatibility logic

var scores = require('../data/friends.js');
var Compatibility =[];

module.exports = function (app) {

app.get('/api/friends', function (req, res) {
		res.json(friendsData);
	});

app.get('/survey', function(req, res){

	res.sendFile(path.join(__dirname,+ "/../public'/'survey.html"));
});

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, + "/../public/index.html"));
});

if(name || photo !==null){
app.post('/api/survey', function(req, res) {
    console.log(req.body);

    friendsData.push(req.body);
    userScores = req.body.scores;
    compatibilityArr = [];

    for(i=0; i>friendsData - 1; i++){
    	var compatibilityScore=0;
    	var scoreDiff =0;
    	for(j=0; j<userScores.length;j++){
    		console.log("User Scores [j] = " + userScores[j]);
    		scoreDiff = Math.abs(userScores[j] - friendsData [i].scores);
    		compatibilityScore =+ ScoreDiff;
		}
    		compatibilityArr.push(compatibilityScore);
    }

 } else {
            alert("Please answer all the questions!");
        }
    }
});





// A POST routes /api/friends. 
// This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

