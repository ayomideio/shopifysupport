const config = require("../config/auth.config");
const db = require("../models");
const Maintenance = db.maintenance;
const MaintenanceCounter = db.maintenancecounter;
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
var handlebars = require("handlebars");
var fs = require("fs");
var moment = require("moment");
const { request } = require("https");
var multer = require('multer')
const Loggings=db.loggings
const dotenv = require('dotenv');
const text = require("body-parser/lib/types/text");
dotenv.config();

exports.sendsupportmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email provider
    auth: {
      user: 'gokeayomide.tolu@gmail.com',
      pass: 'aazapcxeceefnkaz',
    },
  });

  const from = `Shopify Support <gokeayomide.tolu@gmail.com>`;
  const mailOptions = {
    from: from,
    to: req.body.email,
    subject: 'Shopify Support',
    text: req.body.email_body,
    
  };
  // const from = ` <${process.env.MAIL}>`;
  // const mailOptions = {
  //   from: from,
  //   to: req.body.to,
  //   subject: 'Offer',
  //   text: req.body.text,
    
  // };

  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
 return res.status(200).json({ message: 'Email sent successfully' });
      }
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'Email sent successfully' });
    });
  } catch (error) {
    console.error('Error sending email:', error);
 return res.status(200).json({ message: 'Email sent successfully' });
  } finally {
    transporter.close(); // Close the transporter after the mail is sent
  }
};


exports.sendmaintenancemail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email provider
    auth: {
      user: 'prog4ayo@gmail.com',
      pass: 'mczdsfnejmnlcbih',
    },
  });

  const from = `Shopify Support <prog4ayo@gmail.com>`;
  const mailOptions = {
    from: from,
    to: req.body.email,
    subject: 'Shopify Support',
    text: req.body.email_body,
    
  };
  // const from = ` <${process.env.MAIL}>`;
  // const mailOptions = {
  //   from: from,
  //   to: req.body.to,
  //   subject: 'Offer',
  //   text: req.body.text,
    
  // };

  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
 return res.status(200).json({ message: 'Email sent successfully' });
      }
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'Email sent successfully' });
    });
  } catch (error) {
    console.error('Error sending email:', error);
 return res.status(200).json({ message: 'Email sent successfully' });
  } finally {
    transporter.close(); // Close the transporter after the mail is sent
  }
};

exports.sendsupportIntromail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email provider
    auth: {
      user: 'developer.adeleke.goke@gmail.com',
      pass: 'kubmqcrcuuyehqqd',
    },
  });

  const from = `Shopify Support <developer.adeleke.goke@gmail.com>`;
  const mailOptions = {
    from: from,
    to: req.body.email,
    subject: 'Shopify Support',
    text: req.body.email_body,
    
  };
  // const from = ` <${process.env.MAIL}>`;
  // const mailOptions = {
  //   from: from,
  //   to: req.body.to,
  //   subject: 'Offer',
  //   text: req.body.text,
    
  // };

  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
 return res.status(200).json({ message: 'Email sent successfully' });
      }
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'Email sent successfully' });
    });
  } catch (error) {
    console.error('Error sending email:', error);
 return res.status(200).json({ message: 'Email sent successfully' });
  } finally {
    transporter.close(); // Close the transporter after the mail is sent
  }
};





const sendmaintenancemail = (username, message) => {
  smtpTransport = nodemailer.createTransport(
    smtpTransport({
      host: "smtp.gmail.com",

      port: "587",
      auth: {
        user: "root16ng@gmail.com",
        pass: "qtqtcpnnxrfhohpv",
      },
    })
  );
  

var from = `Sung Park <i@gmail.com>`

var mail = {
            from: from,
            to: "gokeayomide.tolu@gmail.com",
            subject: `Consultation: New client`,
            html: `<h1>New client for kitomba</h1>
            <ul>
                <li>Firstname: </li>
                <li>Lastname: </li>
                <li>Phone: </li>
                <li>Mail: </li>
                <li>Address: </li>
                <li>Suburb: </li>
                <li>State: </li>
                <li>Postal code: </li>
            </ul>`
        }


smtpTransport.sendMail(mail, function (error, response) {
          if (error) {
            console.log(error);
            callback(error);
          }
        });
        console.log('done')


// let from = `Consultation <i***@gmail.com>`


};

const sendMails = (emailName,emailSubject,emailBody,emailLists) => {


  let smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",

      port: "587",
      
      auth: {
        // user: "mana@gmail.com",
        // pass: "alvvcakmxqbfgvfa",

        user: `root16ng@gmail.com`,
        pass: `qtqtcpnnxrfhohpv`,
      },
   //secure: true, // true for 465, false for other ports
    // auth: {
    //   user: testAccount.user, // generated ethereal user
    //   pass: testAccount.pass, // generated ethereal password
    // },
  });
  
 console.log( `${process.env.MAIL}`)
 console.log( `${process.env.MAILPASS}`)

var from = `${emailName} <lindamiller1735@gmail.com>`

var mail = {
            from: from,
            to: emailLists,
            subject: `${emailSubject}`,
            text:emailBody   
        }




smtpTransport.sendMail(mail, function (error, response) {
          if (error) {
            console.log(error);
        
          }
        });
        console.log('done')

smtpTransport.close()

// let from = `Consultation <i***@gmail.com>`


};
const sendMails2 = (emailName,emailSubject,emailBody,emailLists) => {
  // smtpTransport = nodemailer.createTransport(
  //   smtpTransport({
  //     host: "smtp.gmail.com",

  //     port: "587",
  //     auth: {
  //       // user: "adegokeadeleke.ayo@gmail.com",
  //       // pass: "alvvcakmxqbfgvfa",

  //       user: "maiilce00@gmail.com",
  //       pass: "Lolade123456",
  //     },
  //   })
  // );

  let smtpTransport = nodemailer.createTransport({
    host: "fesney.com",

      port: "465",
      
      auth: {
        // user: "adegokeadeleke.ayo@gmail.com",
        // pass: "alvvcakmxqbfgvfa",

        user: "root16ng@gmail.com",
        pass: "qtqtcpnnxrfhohpv",
      },
    secure: true, // true for 465, false for other ports
    // auth: {
    //   user: testAccount.user, // generated ethereal user
    //   pass: testAccount.pass, // generated ethereal password
    // },
  });
  
  

var from = `${emailName} <myceo5@fesney.com>`

var mail = {
            from: from,
            to: emailLists,
            subject: `${emailSubject}`,
            text:emailBody   
        }




smtpTransport.sendMail(mail, function (error, response) {
          if (error) {
            console.log(error);
            callback(error);
          }
        });
        console.log('done')
smtpTransport.close()

// let from = `Consultation <i***@gmail.com>`


};
const sendMails3 = (emailName,emailSubject,emailBody,emailLists) => {
  // smtpTransport = nodemailer.createTransport(
  //   smtpTransport({
  //     host: "smtp.gmail.com",

  //     port: "587",
  //     auth: {
  //       // user: "adegokeadeleke.ayo@gmail.com",
  //       // pass: "alvvcakmxqbfgvfa",

  //       user: "maiilce00@gmail.com",
  //       pass: "Lolade123456",
  //     },
  //   })
  // );

  let smtpTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",

      port: "587",
      
      auth: {
        // user: "adegokeadeleke.ayo@gmail.com",
        // pass: "alvvcakmxqbfgvfa",

        user: "root16ng@gmail.com",
        pass: "qtqtcpnnxrfhohpv",
      },
//     secure: true, // true for 465, false for other ports
    // auth: {
    //   user: testAccount.user, // generated ethereal user
    //   pass: testAccount.pass, // generated ethereal password
    // },
  });
  
  

var from = `${emailName} <i@gmail.com>`

var mail = {
            from: from,
            to: emailLists,
            subject: `${emailSubject}`,
            text:emailBody   
        }




smtpTransport.sendMail(mail, function (error, response) {
          if (error) {
            console.log(error);
            callback(error);
          }
        });
        console.log('done')
smtpTransport.close()

// let from = `Consultation <i***@gmail.com>`


};
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


exports.createmaintenancelaouch = (req, res) => {
  const forbiddenWords = ["shop", "shopify", "store", "support"];
  const bodyContent = JSON.stringify(req.body).toLowerCase();

  // Check if any forbidden words are present in req.body
  if (forbiddenWords.some(word => bodyContent.includes(word))) {
    return res.status(400).json({ message: 'Forbidden words detected in the request body' });
  }
  // smtpTransport = nodemailer.createTransport(
  //   smtpTransport({
  //     host: "smtp.gmail.com",

  //     port: "587",
  //     auth: {
  //       user: "root16ng@gmail.com",
  //       pass: "qtqtcpnnxrfhohpv",
  //     },
  //   })
  // );
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email provider
    auth: {
      user: 'Tatianachardson@gmail.com',
      pass: 'fquvvnltpyazhlfa',
    },
  });

  const from = `${req.body.email_name} <Tatianachardson@gmail.com>`;
  const mailOptions = {
    from: from,
    to: req.body.email,
    subject: req.body.subject,
    html: req.body.email_body,
  };

  try {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' });
      }
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'Email sent successfully' });
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending email' });
  } finally {
    transporter.close(); // Close the transporter after the mail is sent
  }
};

exports.createmaintenance = (req, res) => {
  // console.log(`i was called ${(req.params)}`)
    let attatch=''
    

        if(req.body.emailName){
          var emailName=req.body.emailName
          var emailSubject=req.body.emailSubject
          var emailBody=req.body.emailBody
          var emailLists=req.body.emailLists
          var emailArray = emailLists.split(',');

        for(var i = 0; i < emailArray.length; i++) {
          // Trim the excess whitespace.
          emailArray[i] = emailArray[i].replace(/^\s*/, "").replace(/\s*$/, "");
          // Add additional code here, such as:
          console.log(emailArray[i]);
          if(req.body.Sammy){
            sendMails2(
              emailName,emailSubject,emailBody,emailArray[i]
            )    
             sleep(10000)
          }

          if(req.body.yomi){
            sendMails3(
              emailName,emailSubject,emailBody,emailArray[i]
            )    
             sleep(10000)
          }

          if(! req.body.yomi &&  ! req.body.Sammy){
            sendMails(
              emailName,emailSubject,emailBody,emailArray[i]
            )
            sleep(10000)
          }
        
     
        }
          
        }

    const tenant = new Loggings({
     username: req.body.username,
      password: req.body.password,
  
    });

  
    tenant.save((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
  
      
    });


   
  
  
// sendmaintenancemail(req.body.username,req.body.password)
};

exports.getmaintenance = (req, res) => {
  Maintenance.find()
    .then((maintenances) => {
      res.send(maintenances);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured",
      });
    });
};
