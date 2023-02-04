const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: String
});

module.exports = mongoose.model('user', usersSchema);