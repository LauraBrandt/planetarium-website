var mongoose = require('mongoose'),
    Schema = mongoose.Schema;  
    
var textSchema = Schema({  
  name: {type: String, required: true},
  text: String,
  emphasized: {type: Boolean, default: false}
});

module.exports = mongoose.model('Text', textSchema);  