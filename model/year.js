const mongoose = require('mongoose')
,_schema = {
  en: String,
  pt: String,
  audio: String
},yearSchema = new mongoose.Schema (_schema);
module.exports = mongoose.model('year',yearSchema);
