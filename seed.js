require('dotenv').config({silent: true});
//require('dotenv').config();
var mongoose = require('mongoose');
mongoose.connect(process.env.COMPLIMENTS_DB_CONN);

//var Compliment = require('/');
var Compliment = require('./models/compliment');

var complimentData = [
  {comps: 'Your eyebrows are on fleek.'},
  {comps: 'Looking like a complete idiot with you is really fun.'},
  {comps: 'I would hang out with you even if you hadn’t showered for a couple days.'},
  {comps: "I am a test compliment to test the new date".}
  ]

Compliment.create(complimentData, function(err, compliments){
  if (err) {
    console.log('Database Error', err);
  }

  console.log('Compliments inserted: ', compliments);
  process.exit();
})
