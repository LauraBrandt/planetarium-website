var mongoose = require('mongoose'),
    Schema = mongoose.Schema;  
    
var exhibitSchema = Schema({  
  title: {type: String, required: true},
  description: [String],
  imageName: String,
  imageText: String,
  order: {type: Number, unique: true}
});

exhibitSchema
.virtual('imageLocation')
.get(function () {
  return '/images/sciencecenter/' + this.imageName;
});

module.exports = mongoose.model('Exhibits', exhibitSchema);  