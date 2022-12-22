const model = require('../models/tasks.model');

function postTask(req, res) {
    
    const newTask = {
        id: model.length,
        //title: ,
        //description: ,
        //date: ,
        //time: 
    }

    model.push(newTask);

    getTask(res, newTask);
}



function getTask(res, newTask) { 
    const friend = model[newTask.id];
    if(friend){
        res.status(200).json(friend);
    } else {
        res.status(404);
    }
}

module.exports = {postTask};