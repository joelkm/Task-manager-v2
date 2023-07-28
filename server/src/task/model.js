const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    assignees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    date: Date,
    state: String,
    space: { type: mongoose.Schema.Types.ObjectId, ref: 'space', required: true }
},
    { timestamps: true }
);

taskSchema.pre("save", async function (next) {
    this.state = "Not Started";
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;