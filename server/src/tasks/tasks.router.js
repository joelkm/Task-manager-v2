const { Router } = require('express');
const { httpGetTasksFromUserId, httpAddNewTask, httpEditTaskById, httpDeleteTaskById } = require('./tasks.controller');

const tasksRouter = Router();

tasksRouter.get('/:userId', httpGetTasksFromUserId);
tasksRouter.post('/', httpAddNewTask);
tasksRouter.put('/:id', httpEditTaskById);
tasksRouter.delete('/:id', httpDeleteTaskById);

module.exports = tasksRouter;