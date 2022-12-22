const express = require('express');
const path = require('path');

const taskController = require('./controllers/tasks.controller');

const  app = express();

const PORT = 3000;



app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`Processing time: ${delta}ms`);
})

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
});

app.post('/', (req, res) => {
    taskController.postTask(req, res);
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}...`);
})