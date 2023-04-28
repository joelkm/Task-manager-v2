const { newUser, fetchUserById } = require("./model");

module.exports = {
    registerUser: async (data) => {
        data.password = await encryptPassword(data.password)
        return await newUser(data); 
    },
    loginUser: async (data) => {
        const stored = await fetchUserBy("email", data.email);
    },
    retrieveUser: async (userId) => {
        return await fetchUserBy("id", userId)
    },
}