const path = require('path');
const express = require('express');
const morgan = require('morgan') ;

const tasksRouter = require('../tasks/tasks.router');
const usersRouter = require('../users/users.router');


const app = express();

app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "..", "dist")));

app.use('/users' ,usersRouter);
app.use('/tasks' ,tasksRouter);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "dist", "index.html"))
});

module.exports = app;