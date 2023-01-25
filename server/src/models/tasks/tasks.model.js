import { find, create, findByIdAndUpdate, deleteOne } from './users.mongo';

async function getTasksFromUserId (userId) {
    const tasks = await find({user: userId}, '_id name description when important') 
    if (!tasks) {
        return false;
    }
    return tasks;
}

async function addNewTask (task) {
    try {
        const newTask = create({
            userId: task.userId,
            name: task.name,
            description: task.description,
            when: task.when,
            important: task.important
        })
        return newTask;
    } catch (err) {
        console.error(`Could not save the task: ${err}`)
        return false;
    }
}

async function editTaskById (taskId, newTaskInfo) {
    try {
        const nonEditedTask = await find({_id: taskId});
        const editedTask = await findByIdAndUpdate({_id: taskId},{"name": newTaskInfo.name, "description": newTaskInfo.description, "userId": newTaskInfo.userId});

        if(nonEditedTask==editedTask){
            console.error('Task was not updated');
            return false; 
        }
        return editedBlog;
    } catch (err) {
        console.error(`Could not update task: ${err}`);
        return false;
    }
}

async function deleteTaskById (taskId) {
    try {
        const task = find({_id: taskId})
        const deleted = await deleteOne({_id: taskId});

        if(deleted.deletedCount == 0) {
            console.error('Nothing was deleted')
            return false;
        }

        return task;
    } catch(err) {
        console.error(`Could not delete the task: ${err}`);
        return false;
    }
}

export default {
    getTasksFromUserId,
    addNewTask,
    editTaskById,
    deleteTaskById
}