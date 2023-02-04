const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
    name: String,
    description: String,
    when: Date,
    important: Boolean
});

module.exports = mongoose.model('task', tasksSchema);