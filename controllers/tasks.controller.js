const model = require('../models/tasks.model');


function postTask(req, res) {
    
    const newTask = {
        id: model.tasks.length,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        time: req.body.time
    }
    model.tasks.push(newTask);

    console.log(model.tasks)

    getTask(res, newTask);
}



function getTask(res, newTask) { 
    const task = model.tasks[newTask.id];
    if(task){
        res.status(200).json(task);
        console.log('Success');
    } else {
        res.status(404);
        console.log('fail lmao')
    }
}

function deleteTask(req, res) {
    const taskId = req.body.id;
    model.tasks.splice(taskId, 1);
    if(req.body.managment === "edit") {
        
    } else {

    }
}

module.exports = {postTask};