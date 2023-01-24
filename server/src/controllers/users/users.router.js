import { Router } from 'express';
import { httpGetUserByUsername, httpSaveUser } from './users.controller';

const usersRouter = Router();

usersRouter.get('/:id', httpGetUserByUsername);
usersRouter.post('/', httpSaveUser);

export default usersRouter;