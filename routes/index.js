var express = require('express');
var router = express.Router();
var Compliment = require('../models/compliment');

function randomColor() {
	var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
	return colors[Math.floor(Math.random()*colors.length)];
}
//Return compliments from DB Collection "compliments"
function randomCompliment(compliments) {
	return compliments[Math.floor(Math.random() * compliments.length)];
}
/* GET compliment form. */
router.get('/compliment_form', function(req, res, next) {
	var color = randomColor();
	res.render('compliment_form', { title: 'WDI Emergency Compliment', color: color });
});

/* GET home page with queried name. */
router.get('/(:name)?', function(req, res, next) {
	name = req.params.name || "Friend";
	var color = randomColor();

	// USE MONGOOSE TO GET A RANDOM COMPLIMENT FROM THE DATABASE, THEN RENDER THE VIEW
	Compliment.find({}, function(err, compliments){
		if (err) console.log('DB Error: ', err)

		console.log('Compliments: ', compliments);

		var random = randomCompliment(compliments);
		var compliment = random.compliment;

		console.log('Random compliment: ', compliment);
		// this line is just here to temporarily prevent an undefined error. You can remove it once you get a real compliment from the DB.
		res.render('index', { title: 'WDI Emergency Compliment', color: color, name: name, compliment: compliment });
	});
});


/* POST compliment. */
router.post('/', function(req, res, next) {
	var newCompliment = req.body.compliment;

	console.log('New compliment: ', newCompliment);

	/* Add a compliments */
  var compliment = new Compliment ({
		comps: newCompliment,
		createdAt: new Date()
	})

compliment.save(function(err, newCompliment){
    if(err) console.log(err);
    console.log('Saved');

	// USE MONGOOSE TO SAVE A NEW COMPLIMENT TO THE DATABASE, THEN REDIRECT TO THE ROOT URL
		res.redirect('/');
	});
});


module.exports = router;
