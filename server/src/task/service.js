const {createTask, fetchTasksBy, updateTask, deleteTask} = require("./model");
const AppError = require("../common/app-error");

module.exports = {
    addTask: async (data) => {
        const task = await createTask(data)
        if(!task) throw new AppError(400, "Task was not created"); 
        
        return task;
    },
    getTasksFromUser: async (userId) => {
        const task = await fetchTasksBy("userId", userId) 
        if(!task) throw new AppError(404, "Task doesn't exist"); 
        
        return task;
    },
    updateSelectedTask: async (taskId, task) => {
        const oldTask = await fetchTasksBy("taskId", taskId);
        if(!oldTask) throw new AppError(404, "Task doesn't exist")
        
        const updatedTask = await updateTask(taskId, task);
        if(!updatedTask || updatedTask == oldTask) throw new AppError(400, "Task was not updated")
    
        return updatedTask;
    },
    deleteSelectedTask: async (taskId) => {
        if(!await fetchTasksBy("taskId", taskId)) throw new AppError(404, "Task doesn't exist");

        const deleted = await deleteTask(taskId);
        if(!deleted) throw new AppError(400, "Task was not deleted")

        return deleted;
    },
}