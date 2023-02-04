const { getTasksFromUserId, addNewTask, editTaskById, deleteTaskById } = require('./tasks.model');
const { existsUserWithId } = require('../users/users.model');

async function httpGetTasksFromUserId (req, res) {
    const userId = req.params.userId;

    if(!existsUserWithId) return res.status(404).json({
            error: 'User does not exist'
        });

    const tasks = await getTasksFromUserId(userId);

    if(!tasks) {
        return res.status(404);
    }
    
    return res.status(200).json(tasks);
}

async function httpAddNewTask (req, res) {
    const task = req.body;

    if(!task.userId || !task.name || !task.description || !task.when || task.important) return res.status(400).json({
            error: 'Missing required task property'
        });

    if(!(await existsUserWithId(task.userId))) return res.status(404).json({
            error:'UserId does not match any existing ID'
        });

    task = await addNewTask(task);

    if(!task) return res.status(400).json({
        error: 'Task could not be added'
    });

    return res.status(201).json(task);
}

async function httpEditTaskById (req, res) {
    const taskId = req.params.userId;
    const editedTask = req.body;

    editedTask = await editTaskById(taskId, editedTask)

    if(!editedTask) return res.status(400).json({
        error: 'Nothing was edited'
    })

    return res.status(200).json(editedTask);
}

async function httpDeleteTaskById (req, res) {
    const taskId = req.params.id;

    const deletedTask = await deleteTaskById(taskId)

    if(!deletedTask) return res.status(400).json({
        error: 'Nothing was deleted'
    })

    return res.status(200).json(deletedTask)
}

module.exports = {
    httpGetTasksFromUserId,
    httpAddNewTask,
    httpEditTaskById,
    httpDeleteTaskById
}