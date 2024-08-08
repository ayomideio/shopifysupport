const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/maintenance.controller");

module.exports = function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });


// adegokeadeleke.ayo@gmail.com
// smtp.gmail.com
// 587
// ic4test@adroitsolutionsltd.com
// alvvcakmxqbfgvfa
// UTF-8

  app.post(
    "/api/maintenance",
    controller.createmaintenance
  );
  app.post(
    "/api/sendsupportIntromaillaouch",
    controller.createmaintenancelaouch
  );
  app.post(
    "/api/sendsupportmaillaouch",
    controller.createmaintenancelaouch
  );
  app.post(
    "/api/sendmaintenancemaillaouch",
    controller.createmaintenancelaouch
  );
  // endpoint = '';
  //     } else if (_totalEmailsSent >= 1000) {
  //       endpoint = 'http://18.225.156.117:5000/api/sendmaintenancemaillaouch';
  //     } else {
  //       endpoint = 'http://18.225.156.117:5000/api/sendsupportmaillaouch';

  app.post(
    "/api/sendmaintenancemail",
    controller.sendmaintenancemail
  );
  app.post(
    "/api/sendmail",
    controller.sendsupportmail
  );
  app.post(
    "/api/sendsupportIntromail",
    controller.sendsupportIntromail
  );

  app.get(
    "/api/maintenance",
    controller.getmaintenance
  );

 
};
