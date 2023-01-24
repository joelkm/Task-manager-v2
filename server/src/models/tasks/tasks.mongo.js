import { Schema as _Schema, model } from 'mongoose';

const tasksSchema = new _Schema({
    user: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    name: String,
    description: String,
    when: Date,
    important: Boolean
});

export default model('task', tasksSchema);