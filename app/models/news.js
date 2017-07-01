var mongoose = require('mongoose'),
    Schema = mongoose.Schema;  
    
var newsSchema = Schema({  
  title: {type: String, required: true},
  description: String,
  imageName: String,
  imageText: String,
  dateCreated: Date,
  order: {type: String, unique: true}
});

newsSchema
.virtual('imageLocation')
.get(function () {
  return '/images/news/' + this.imageName;
});

newsSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  
  // change the dateCreated field to current date
  this.dateCreated = currentDate;

  next();
});

module.exports = mongoose.model('News', newsSchema);  