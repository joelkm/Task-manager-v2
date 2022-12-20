const model = require('../models/tasks.model.js');

function postTask(req, res) {
    
    const newTask = {
        id: model.length,
        //title: ,
        //description: ,
        //date: ,
        //time: 
    }

    model.push(newTask);

    getTask();
}



function getTask(res, newTask) { 
    const friend = model[newTask.id];
    if(friend){
        res.status(200).json(friend);
    } else {
        res.status(404);
    }
}