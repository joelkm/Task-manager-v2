const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    creator: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    assignee: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    name: String,
    description: String,
    date: Date,
    state: String,
    space: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }]
},
    { timestamps: true }
);

const Task = mongoose.model('task', tasksSchema);

module.exports = Task;