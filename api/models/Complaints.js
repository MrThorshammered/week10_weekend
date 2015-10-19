var mongoose = require('mongoose');

var ComplaintSchema = mongoose.Schema({
	name: String,
  likes: Number,
  url: String,
});

module.exports = mongoose.model('Complaint', ComplaintSchema);

