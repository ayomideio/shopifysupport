const config = require("../config/auth.config");
const db = require("../models");
const Tenants = db.tenant;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const moment=require('moment')

exports.createtenant = (req, res) => {
  if (req.body.operate ==='create' && req.body.propertyId){
  const tenant = new Tenants({
    propertyId:req.body.propertyId,
    tenantId:req.body.propertyId+moment().format('YYYYMMDD')+moment().format('HHmmss'),
    flatNo: req.body.flatNo,
    floor: req.body.floor,
    tenantType: req.body.tenantType,
    spaceSqm: req.body.spaceSqm,
    bedroom: req.body.bedroom,
    bathroom: req.body.bathroom,
    price: req.body.price,
    electrical:req.body.electrical,
    water: req.body.water,
    tenantName: req.body.tenantName,
    idno: req.body.idno,
    contact: req.body.contact,
    dob: req.body.dob,
    emailaddress: req.body.emailaddress,
    startdate: req.body.startdate,
    enddate: req.body.enddate,
    mopayment: req.body.mopayment,
    maintaindate: req.body.maintaindate,
    contract: req.body.contract
  });

  tenant.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    
  });
}
if (req.body.operate ==='edit' && req.body.flatNo){
  

  const filter = { flatNo: req.body.flatNo};
  const update = {propertyId:req.body.propertyId,
    tenantId:req.body.propertyId+moment().format('YYYYMMDD')+moment().format('HHmmss'),
    floor: req.body.floor,
    tenantType: req.body.tenantType,
    spaceSqm: req.body.spaceSqm,
    bedroom: req.body.bedroom,
    bathroom: req.body.bathroom,
    price: req.body.price,
    electrical:req.body.electrical,
    water: req.body.water,
    tenantName: req.body.tenantName,
    idno: req.body.idno,
    contact: req.body.contact,
    dob: req.body.dob,
    emailaddress: req.body.emailaddress,
    startdate: req.body.startdate,
    enddate: req.body.enddate,
    mopayment: req.body.mopayment,
    maintaindate: req.body.maintaindate,
    contract: req.body.contract};
  
  
  
  Tenants.updateOne(filter, update, function(
    err,
    result
  ) {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
}
};


exports.gettenant=(req,res)=>{
  var mysort = { flatNo: 1};

  Tenants.find({}, { _id: 0,__v:0 }).sort(mysort)
  .then(tenants => {
      res.send(tenants);
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while retrieving Languages."
      });
  });


}



exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: token
      });
    });
};
