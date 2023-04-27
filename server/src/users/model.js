const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: String
});

const db = mongoose.model('user', usersSchema);



module.exports = {
    fetchUserById: async (userId) => {
        return await db.findById(userId)
    },
    newUser: async (data) => {
        return await db.create({
            ...data
        });
    },
    updateUserData: async (userId, data) => {
        const user = await fetchUserById(userId)
        await db.findByIdAndUpdate(userId, {...data});
        const updated = await fetchUserById(userId)
        if(user == updated) return false
        return updated;
    }
}