if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const bodyparser = require("body-parser");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

// connect to mongoose
const { DB_URL } = process.env;

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to mongoose");
  })
  .catch((err) => {
    console.log("Couldn't connect to Mongoose");
    console.log(err);
  });

// routers
const messageRouter = require("./routes/message");
const curriculumRouter = require("./routes/curriculum");

//app
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// define middlware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// use files in public
app.use(express.static("public"));

app.use("/send-message", messageRouter);
app.use("/download-curriculum", curriculumRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
