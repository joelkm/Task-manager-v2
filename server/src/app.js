import path from 'path';
import express, { json } from 'express';
import morgan from 'morgan';

import authorsRouter from './controllers/authors/authors.router';
import blogsRouter from './controllers/blogs/blogs.router';
import commentsRouter from './controllers/comments/comments.router';
import usersRouter from './controllers/users/users.router';


const app = express();

app.use(morgan('combined'));

app.use(json());
//app.use(express.static(path.join(__dirname, "..", "..", "public")));


app.use('/authors' ,authorsRouter);
app.use('/blogs' ,blogsRouter);
app.use('/comments' ,commentsRouter);
app.use('/users' ,usersRouter);

/*app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"))
});*/
export default app;