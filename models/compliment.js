// How can we set up the Compliment model to talk to our database?
// Look at past examples

var mongoose = require('mongoose');
var schema = new mongoose.Schema({
 comps: {type:String, required: true},
 createdAt: {type:Date}
});

var Compliment = mongoose.model('Compliment', schema);

module.exports = Compliment;


// Make this available to our other files
module.exports = Compliment;


// var Compliment = null;
