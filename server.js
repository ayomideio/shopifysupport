const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");
const excelToJson = require('convert-excel-to-json');
const app = express();
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var multer  = require('multer')
var fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();


var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;
const User = db.user;

db.mongoose
  .connect(`mongodb+srv://ayomide:Ay0m1d3ff@cluster0.n9ojf.mongodb.net/Aljabeer?authSource=admin&replicaSet=atlas-4h6agv-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Okafor2 is Live" });
});


app.use('/uploads', express.static(__dirname +'/uploads'));
 var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString()+file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })
  app.post('/upload', upload.single('myFile'), async(req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next("hey error")
    }
      
      
      const imagepost= new model({
        image: file.path
      })
      const savedimage= await imagepost.save()
      res.json(savedimage)
    
  })

  app.get('/image',async(req, res)=>{
   const image = await model.find()
   res.json(image)
   
  })
// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/tenant.routes")(app);
require("./app/routes/maintenance.routes")(app);
require("./app/routes/properties.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
// const result = excelToJson({
//   sourceFile: 'Tenants.xlsx'
// });

// https://accounts.google.com/b/0/DisplayUnlockCaptcha
// for (var i=0;i<9000000;i++){
//   console.log('running test'+ i)
// }
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
