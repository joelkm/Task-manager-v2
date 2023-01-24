import { find, create, deleteOne } from './users.mongo';

async function getUserById(userId) {
    const user = await find({username}, '_id username') 
    if (user) {
        return user;
    }
    else {
        return false
    }
} 

async function addNewUser(user) {
    try {
        const newUser = await create({
            name: user.username
        })
        return newUser;
    } catch(err) {
        console.error(`Could not add user: ${err}`);
        return false;
    }
}

export default {
    getUserById,
    addNewUser
}