var express = require("express");
var router = express.Router();
const cors = require("cors");

router.get("/english", cors(), function (req, res, next) {
  const options = {
    // root: "E:/nicol/Documents/Web Dev/MEAN stack/Portfolio Page/backend",
    root: "E:/nicol/Documents/Web Dev/MEAN stack/Portfolio Page/backend/curriculums",
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };

  const fileName = "cvEng.pdf";

  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

router.get("/spanish", cors(), function (req, res, next) {
  const options = {
    root: "E:/nicol/Documents/Web Dev/MEAN stack/Portfolio Page/backend/curriculums",
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };

  const fileName = "cvEsp.pdf";

  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

module.exports = router;
