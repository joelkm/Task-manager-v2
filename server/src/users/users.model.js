const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: String
});

const usersDb = mongoose.model('user', usersSchema);

async function getUser(userId) {
    const user = await usersDb.find({_id: userId})
    if() return true;
    else {
        console.error('UserId does not match any existing ID');
        return false;
    }
}

async function getUserByUsername(username) {
    const user = await usersDb.find({username}, '_id username') 
    if (user) {
        return user;
    }
    else {
        return false;
    }
} 

async function saveUser(user) {
    try {
        if(usersDb.find({username: user.username})) {
            console.error('Username already exists');
            return false;
        }

        const newUser = await usersDb.create({
            name: user.username
        })
        return newUser;
    } catch(err) {
        console.error(`Could not add user: ${err}`);
        return false;
    }
}

module.exports = {
    existsUserWithId,
    getUserByUsername,
    saveUser
}