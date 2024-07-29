const mongoose = require("mongoose");



const Tenants = mongoose.model(
  "Tenants",
  new mongoose.Schema({
    tenantId:String,
    propertyId:String,
    flatNo: String,
    floor: String,
    tenantType: String,
    spaceSqm: String,
    bedroom: String,
    bathroom: String,
    price: String,
    electrical: String,
    water: String,
    tenantName: String,
    idno: String,
    contact: String,
    dob: String,
    emailaddress: String,
    startdate: String,
    enddate: String,
    mopayment: String,
    maintaindate: String,
    contract: String
  })
);

module.exports = Tenants;
