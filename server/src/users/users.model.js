const users = require('./users.mongo');

async function existsUserWithId(userId) {
    if(users.find({_id: userId})) return true;
    else {
        console.error('UserId does not match any existing ID');
        return false;
    }
}

async function getUserByUsername(username) {
    const user = await users.find({username}, '_id username') 
    if (user) {
        return user;
    }
    else {
        return false;
    }
} 

async function saveUser(user) {
    try {
        if(users.find({username: user.username})) {
            console.error('Username already exists');
            return false;
        }

        const newUser = await users.create({
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