const mongoose = require("mongoose");



const TicketCount = mongoose.model(
  "TicketCount",
  new mongoose.Schema({
    count:String,
  })
);

module.exports = TicketCount;
