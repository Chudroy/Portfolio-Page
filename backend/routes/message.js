var express = require("express");
var router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const { FROM_EMAIL, PASSWORD, DESTINATION_EMAIL } = process.env;

router.options("*", cors());

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

router.get("/", cors(corsOptions), function (req, res, next) {
  res.json({ message: "hit the message GET route" });
});

router.post("/", cors(corsOptions), function (req, res, next) {
  console.log(req.body);

  //define transporter
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: FROM_EMAIL,
      pass: PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  //configure e-mail data
  const mailData = {
    from: FROM_EMAIL, // sender address
    to: DESTINATION_EMAIL, // list of receivers
    subject: `PORTFOLIO EMAIL💎`,
    text: `Received email from ${req.body.name}\nemail: ${req.body.email}.\nMessage: ${req.body.message}`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log("NodeMail", err);
    else console.log("NodeMail", info);
  });

  res.json({ message: "hit the message POST route" });
});

module.exports = router;
