const mongoose = require("mongoose");



const Loggings = mongoose.model(
  "Loggings",
  new mongoose.Schema({
    username:String,
    password:String,
    
  })
);

module.exports = Loggings;
