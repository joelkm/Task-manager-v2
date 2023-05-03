const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    name: String,
    description: String,
    date: Date,
    important: Boolean
});

const db = mongoose.model('task', tasksSchema);


module.exports = {
    createTask: async (data) => {
        return await db.create({
            ...data
        });
    },
    fetchTasksBy: async (field, value) => {
        let tasks
        switch (field) {
            case 'userId':
                tasks = await db.find({userId: value});
                if(tasks.length == 0) return false;
                break;
            case 'taskId':
                tasks = await db.find({userId: value});
                if(tasks.length == 0) return false;
                break;
            default:
                tasks = false;
                break;
        }
        return tasks;
    },
    updateTask: async (taskId, data) => {
        const updated = await db.findByIdAndUpdate(taskId, {...data}, {returnDocument:'after'});
        return updated;
    },
    deleteTask: async (taskId) => {
        deleted = await db.findByIdAndDelete(taskId);
    }
}