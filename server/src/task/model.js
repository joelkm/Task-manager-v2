const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    title: String,
    description: String,
    date: Date,
});

const Task = mongoose.model('task', tasksSchema);

module.exports = Task;