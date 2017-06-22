var mongoose = require('mongoose'),
    Schema = mongoose.Schema;  
    
var personnelSchema = Schema({  
  name: {type: String, required: true},
  title: String,
  email: String,
  phone: String,
  imageName: String,
  order: {type: String, unique: true}
});

personnelSchema
.virtual('imageLocation')
.get(function () {
  return '/images/people/' + this.imageName;
});

module.exports = mongoose.model('Personnel', personnelSchema); 