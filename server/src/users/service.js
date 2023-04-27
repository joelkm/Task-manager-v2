const { newUser, fetchUserById } = require("./model");

module.exports = {
    registerUser: async (data) => {
       return await newUser(data); 
    },
    loginUser: async (data) => {
        
    },
    retrieveUser: async (userId) => {
        return await fetchUserById
    },
}