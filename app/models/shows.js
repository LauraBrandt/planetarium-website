var mongoose = require('mongoose'),
    Schema = mongoose.Schema;  
    
var showSchema = Schema({  
  title: {type: String, required: true},
  description: [String],
  date: String,
  status: { type: String, enum : ['upcoming','previous'] },
  order: Number
});

module.exports = mongoose.model('Shows', showSchema);  