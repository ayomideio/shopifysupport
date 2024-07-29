
const controller = require("../controllers/tenant.controller");

module.exports = function(app) {


  app.post(
    "/api/tenant",
    controller.createtenant
  );
  app.get(
    "/api/tenant",
    controller.gettenant
  );

  app.post("/api/auth/signin", controller.signin);
};
