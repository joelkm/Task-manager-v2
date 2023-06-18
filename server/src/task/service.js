const Task = require("./model");
const AppError = require("../common/app-error");

module.exports = {
    addTask: async (data) => {
        const task = await Task.create(data);
        if(!task) throw new AppError(400, "Task was not created"); 
        
        return task;
    },
    getTasksFromUser: async (userId) => {
        const tasks = await Task.find({user: userId}); 
        
        return tasks;
    },
    updateSelectedTask: async (taskId, task) => {
        const oldTask = await Task.findById(taskId);
        if(!oldTask) throw new AppError(404, "Task doesn't exist")
        
        const updatedTask = await Task.findByIdAndUpdate(taskId, {...task}, {returnDocument: 'after'});
        if(!updatedTask || updatedTask == oldTask) throw new AppError(400, "Task was not updated")
    
        return updatedTask;
    },
    deleteSelectedTask: async (taskId) => {
        if(!await Task.findById(taskId)) throw new AppError(404, "Task doesn't exist");

        const deleted = await Task.findByIdAndDelete(taskId);
        if(!deleted) throw new AppError(400, "Task was not deleted")

        return deleted;
    },
}