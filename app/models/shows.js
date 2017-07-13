var mongoose = require('mongoose'),
    Schema = mongoose.Schema;  
    
var showSchema = Schema({  
  title: {type: String, required: true},
  description: [String],
  dates: [{
    weekday: String,
    month: String,
    day: Number,
    year: String,
    time: String,
    ampm: String
  }],
  status: { type: String, enum : ['upcoming','previous'] },
  order: Number
});

module.exports = mongoose.model('Shows', showSchema);  