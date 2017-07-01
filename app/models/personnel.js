var mongoose = require('mongoose'),
    Schema = mongoose.Schema;  
    
var personnelSchema = Schema({  
  fullName: String,
  first: {type: String, required: true},
  last: {type: String, required: true},
  title: String,
  email: String,
  phone: String,
  imageName: String,
  imageText: String,
  order: {type: String, unique: true}
});

personnelSchema
.virtual('imageLocation')
.get(function () {
  return '/images/people/' + this.imageName;
});

personnelSchema.pre('save', function(next) {
  if (!this.fullName) {
    this.fullName = this.first + ' ' + this.last;
  }
  next();
});

module.exports = mongoose.model('Personnel', personnelSchema); 