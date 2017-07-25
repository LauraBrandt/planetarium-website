var mongoose = require('mongoose'),
    Schema = mongoose.Schema;  
    
var postSchema = Schema({  
  name: {type: String, required: true, unique: true},
  header: String,
  body: [String]
});

module.exports = mongoose.model('Post', postSchema);  