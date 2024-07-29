const mongoose = require("mongoose");



const Maintenance = mongoose.model(
  "Maintenance",
  new mongoose.Schema({
    propertyName:String,
    email:String,
    username:String,
    ticketnumber:String,
    attachment:String,
    message:String,
    ticketstatus:String,
    cost:String,
    nooflabors:String,
    rop: String
  })
);

module.exports = Maintenance;
