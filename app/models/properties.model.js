const mongoose = require("mongoose");



const Properties = mongoose.model(
  "Properties",
  new mongoose.Schema({
    propertyId:String,
    propertyName:String,
    propertyDescription: String,
    propertyUnit:[],
  })
);  

module.exports = Properties;
