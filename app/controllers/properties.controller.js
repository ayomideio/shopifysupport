const config = require("../config/auth.config");
const db = require("../models");
const Properties = db.properties;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const moment=require('moment')




exports.createproperties = (req, res) => {
  if (req.body.operate ==='create'){
  let   punit=req.body.propertyUnit
    
    // console.log(`propertiers     ${JSON.stringify(punit)}`)
  const properties = new Properties({
    propertyId:req.body.propertyName+moment().format('YYYYMMDD')+moment().format('HHmmss'),
    propertyName: req.body.propertyName,
    propertyDescription: req.body.propertyDescription,
    propertyUnit:punit
  
  });

  properties.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    
  });
}
if (req.body.operate ==='edit'){
  
 
  let   punit=req.body.propertyUnit
    const filter = { propertyId: req.body.propertyId };
const update = {  propertyName: req.body.propertyName,
  propertyDescription: req.body.propertyDescription,
propertyUnit:punit,};
  


Properties.updateOne({ propertyId: req.body.propertyId }, update, function(
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


exports.getproperties=(req,res)=>{
  Properties.find({}, { _id: 0,__v:0 })
  .then(propertiess => {
      res.send(propertiess);
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
