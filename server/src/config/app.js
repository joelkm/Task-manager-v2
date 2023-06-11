const express = require("express");
const session = require('express-session');
const passport = require("passport");
const cors = require('cors');

const handleError = require('../common/error-handler');
const AppError = require("../common/app-error");
const corsOptions = {
  origin: '*',
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions))

app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/user", require("../user"));

app.use("/task", require("../task"));

app.use("/", require("../views"));

app.use("*", (req, res, next) => {
  next(new AppError(404, `Could not handle ${req.method} request in '${req.protocol + '://' + req.get('host') + req.originalUrl}'`));
});
app.use((err, req, res, next) => {
  handleError(err, req, res);
});

module.exports = app;