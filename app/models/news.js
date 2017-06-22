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

module.exports = mongoose.model('News', newsSchema);  