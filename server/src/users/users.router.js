const { Router } = require('express');
const { httpGetUserByUsername, httpSaveUser } = require('./users.controller');

const usersRouter = Router();

usersRouter.get('/:id', httpGetUserByUsername);
usersRouter.post('/', httpSaveUser);

module.exports = usersRouter;