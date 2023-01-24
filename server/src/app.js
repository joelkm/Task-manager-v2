import path from 'path';
import express, { json } from 'express';
import morgan from 'morgan';

import tasksRouter from './controllers/tasks/tasks.router';
import usersRouter from './controllers/users/users.router';


const app = express();

app.use(morgan('combined'));

app.use(json());
//app.use(express.static(path.join(__dirname, "..", "..", "public")));

app.use('/tasks' ,tasksRouter);
app.use('/users' ,usersRouter);

/*app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"))
});*/
export default app;