const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    email: String,
    password: String
});

const db = mongoose.model('user', usersSchema);



module.exports = {
    fetchUserBy: async (field, value) => {
        let user
        switch (field) {
            case 'email':
                user = await db.findOne({email: value});
                if(user == null) return false;
                break;
            case 'id':
                user = await db.findOne({_id: value});
                if(user == null) return false;
                break;
            default:
                user = false;
                break;
        }
        return user;
    },
    newUser: async (data) => {
        return await db.create({
            ...data
        });
    }
}