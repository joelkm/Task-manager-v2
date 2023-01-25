import { Router } from 'express';
import { httpGetTasksFromUserId, httpAddNewTAsk, httpEditTaskById, httpDeleteTaskById } from './tasks.controller';

const tasksRouter = Router();

tasksRouter.get('/:userId', httpGetTasksFromUserId);
tasksRouter.post('/', httpAddNewTAsk);
tasksRouter.put('/:id', httpEditTaskById);
tasksRouter.delete('/:id', httpDeleteTaskById);

export default tasksRouter;