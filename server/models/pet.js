var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var DescriptionSchema = require('./description').schema;

var PetSchema = new Schema({
  petId: { type: String, required: true, unique: true},
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  animalType: { type: String, required: true },
});

var Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
