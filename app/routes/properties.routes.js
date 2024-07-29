const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/properties.controller");

module.exports = function(app) {

  app.post(
    "/api/properties",
    controller.createproperties
  );

  
  app.get(
    "/api/properties",
    controller.getproperties
  );

 
};
