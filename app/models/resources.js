var mongoose = require('mongoose'),
    Schema = mongoose.Schema;  
    
var resourceSchema = Schema({  
  title: {type: String, required: true},
  author: String,
  description: String,
  fileLink: {type: String, required: true},
  fileType: {type: String, enum: ['pdf', 'doc', 'ppt', 'mp3', 'zip', 'image', 'video', 'other']},
  size: String, 
  dateCreated: Date,
  order: {type: Number, unique: true}
});

module.exports = mongoose.model('Resources', resourceSchema);  