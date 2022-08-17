var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("hit the message route");
});

router.post("/", function (req, res, next) {
  const message = req.body;
  console.log(post);
  res.status(201).json({ message: "message sent sucessfully" });
});

module.exports = router;
