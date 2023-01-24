import { find, create} from './users.mongo';

async function getUserByUsername(username) {
    const user = await find({username}, '_id username') 
    if (user) {
        return user;
    }
    else {
        return false;
    }
} 

async function saveUser(user) {
    try {
        if(find({username: user.username})) {
            console.error('Username already exists');
            return false;
        }

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
    getUserByUsername,
    saveUser
}