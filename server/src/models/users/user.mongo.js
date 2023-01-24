import { Schema, model } from 'mongoose';

const tasksSchema = new Schema({
    username: String
});

export default model('user', usersSchema);