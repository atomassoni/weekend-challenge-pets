var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var descriptionFilter = require('../modules/description-filter');

var DescriptionSchema = new Schema({
  description: { type: String, required: true },

});

DescriptionSchema.pre('save', function (next) {
  var shortenedDescription = descriptionFilter(this.content);
  this.content = shortenedDescription;
  next();
});

var Description = mongoose.model('Description', DescriptionSchema);

module.exports = Description;
