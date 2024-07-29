const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.tenant = require("./tenant.model");
db.maintenance=require("./maintenance.model")
db.properties=require('./properties.model')
db.maintenancecounter=require('./maintenanceticketcount.model')
db.loggings=require('./loggings.model.js')
db.ROLES = ["user", "admin", "moderator"];
module.exports = db;