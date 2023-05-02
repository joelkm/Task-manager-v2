const express = require("express");
const cors = require("cors");
const passport = require("passport")
const handleError = require('../middlewares/error-handler');
const { NotFoundError } = require('./app-error');

const corsOptions = {
    origin: "*",
    credentials: true,
  };

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors(corsOptions));

app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/user", require("../user"));

app.use("*", (req, res, next) => {
  next(new NotFoundError(`Could not handle ${req.method} request in '${req.protocol + '://' + req.get('host') + req.originalUrl}'`));
});
app.use((err, req, res, next) => {
  handleError(err, req, res);
});

module.exports = app;